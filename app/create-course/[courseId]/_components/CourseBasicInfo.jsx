import React from 'react'
import { FaHeartbeat } from 'react-icons/fa' // Import the health icon
import { Button } from "@/components/ui/button"

function CourseBasicInfo({ course }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex">
            <div className="flex-grow pr-6">
                <h1 className="text-3xl font-bold mb-2">{course?.name}</h1>
                <p className="text-gray-600 mb-4 text-sm">
                    {course?.description || "This course is a gentle introduction to the subject, designed for individuals with no prior experience. You will learn fundamental concepts, techniques, and practices to promote physical and mental well-being. This course is ideal for those seeking to improve their skills, reduce stress, and enhance overall knowledge."}
                </p>
                <div className="flex items-center text-sm text-purple-600 mb-4">
                    <FaHeartbeat className="mr-2" />
                    <span>{course?.category || "Health"}</span>
                </div>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full">
                    Start
                </Button>
            </div>
            <div className="flex-shrink-0 w-48 h-48 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>
        </div>
    )
}

export default CourseBasicInfo