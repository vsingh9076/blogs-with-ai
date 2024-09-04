import React, { useState, useEffect } from 'react'
import { FaClock, FaEdit } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function ChapterList({ course, onUpdate }) {
    const [isOpen, setIsOpen] = useState(false)
    const [editingChapter, setEditingChapter] = useState(null)
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')

    useEffect(() => {
        if (editingChapter) {
            setEditTitle(editingChapter.about)
            setEditDescription(editingChapter.topics.join('\n'))
        }
    }, [editingChapter])

    const handleEdit = (chapter) => {
        setEditingChapter(chapter)
        setIsOpen(true)
    }

    const handleUpdate = () => {
        const updatedChapter = {
            ...editingChapter,
            about: editTitle,
            topics: editDescription.split('\n').filter(topic => topic.trim() !== '')
        }
        onUpdate(updatedChapter)
        setIsOpen(false)
    }

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Chapters</h2>
            <div className="space-y-4">
                {course?.courseOutput?.course?.chapters.map((chapter, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                    {chapter.chapter}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{chapter.about}</h3>
                                    <div className="flex items-center mt-2 text-sm text-gray-500">
                                        <FaClock className="mr-1" />
                                        <span>{chapter.duration}</span>
                                    </div>
                                    <ul className="mt-2 list-disc list-inside text-gray-600">
                                        {chapter.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex}>{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => handleEdit(chapter)}>
                                <FaEdit className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Chapter</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <label htmlFor="chapterTitle">Chapter Title</label>
                            <Input
                                id="chapterTitle"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="chapterTopics">Topics (one per line)</label>
                            <Textarea
                                id="chapterTopics"
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ChapterList