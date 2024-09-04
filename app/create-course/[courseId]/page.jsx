'use client'
import React, { useState, useEffect } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from './_components/ChapterList'
import { useParams } from 'next/navigation'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'

function CourseLayout() {
    const [course, setCourse] = useState(null)
    const params = useParams()

    useEffect(() => {
        const fetchCourse = async () => {
            const result = await db.select().from(CourseList).where(eq(CourseList.courseId, params.courseId))
            if (result.length > 0) {
                setCourse(result[0])
            }
        }
        fetchCourse()
    }, [params.courseId])

    const handleCourseUpdate = async (updatedData) => {
        const updatedCourse = { ...course, ...updatedData }
        setCourse(updatedCourse)
        await db.update(CourseList).set(updatedData).where(eq(CourseList.courseId, params.courseId))
    }

    const handleChapterUpdate = async (updatedChapter) => {
        const updatedChapters = course.courseOutput.course.chapters.map(chapter =>
            chapter.chapter === updatedChapter.chapter ? updatedChapter : chapter
        )
        const updatedCourse = {
            ...course,
            courseOutput: {
                ...course.courseOutput,
                course: {
                    ...course.courseOutput.course,
                    chapters: updatedChapters
                }
            }
        }
        setCourse(updatedCourse)
        await db.update(CourseList)
            .set({ courseOutput: updatedCourse.courseOutput })
            .where(eq(CourseList.courseId, params.courseId))
    }

    if (!course) return <div>Loading...</div>

    return (
        <div className='p-5 bg-white rounded-lg'>
            <CourseBasicInfo course={course} onUpdate={handleCourseUpdate} />
            <CourseDetail course={course} />
            <ChapterList course={course} onUpdate={handleChapterUpdate} />
        </div>
    )
}

export default CourseLayout