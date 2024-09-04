import React from 'react'
import { FaChartBar, FaClock, FaBook, FaVideo } from 'react-icons/fa'

function CourseDetail({ course }) {
    console.log("Course data received:", course);
    console.log("Level:", course?.level);
    console.log("Length:", course?.length);
    console.log("Number of Chapters:", course?.noOfChapters);
    console.log("Include Video:", course?.includeVideo);

    const details = [
        { icon: <FaChartBar />, label: 'Skill Level', value: course?.level },
        { icon: <FaClock />, label: 'Duration', value: course?.courseOutput?.length },
        { icon: <FaBook />, label: 'No Of Chapters', value: course?.courseOutput?.noOfChapters },
        { icon: <FaVideo />, label: 'Video Included?', value: course?.includeVideo }
    ]

    return (
        <div className="bg-gray-100 rounded-lg p-4 mt-6 shadow-sm">
            <div className="flex flex-wrap justify-between">
                {details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2 sm:mb-0">
                        <div className="text-purple-500 text-xl">{detail.icon}</div>
                        <div>
                            <p className="text-sm text-gray-500">{detail.label}</p>
                            <p className="font-semibold">{detail.value || 'N/A'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseDetail