import React, { useState } from 'react'
import { FaHeartbeat, FaEdit } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function CourseBasicInfo({ course, onUpdate }) {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState(course?.name || '')
    const [description, setDescription] = useState(course?.description || '')

    const handleUpdate = () => {
        onUpdate({ name: title, description })
        setIsOpen(false)
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex">
            <div className="flex-grow pr-6">
                <div className="flex items-center mb-2">
                    <h1 className="text-3xl font-bold mr-2">{course?.name}</h1>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                                <FaEdit className="h-4 w-4" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Course Title & Description</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <label htmlFor="title">Course Title</label>
                                    <Input
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="description">Description</label>
                                    <Textarea
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                            <Button onClick={handleUpdate} className="bg-purple-500 hover:bg-purple-600 text-white">Update</Button>
                        </DialogContent>
                    </Dialog>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{course?.description}</p>
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