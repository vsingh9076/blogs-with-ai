'use client';  // Add this line at the top

import React, { useState, useContext } from 'react'
import { HiOutlineSquares2X2, HiOutlineDocumentText, HiOutlineCog } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import SelectCategory from './_components/SelectCategory'
import TopicDescription from './_components/TopicDescription'
import SelectOption from './_components/SelectOption'
import { UserInputContext } from '@/app/_context/UserInputContext'
import { GenerateCourseLayout_AI } from '@/configs/AiModel'
import LoadingDialog from './_components/LoadingDialog'
import uuid4 from "uuid4";
import { useUser } from '@clerk/nextjs';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useRouter } from 'next/navigation';

function CreateCourse() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { userCourseInput } = useContext(UserInputContext)
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const StepperOptions = [
    { id: 1, name: 'Category', icon: HiOutlineSquares2X2 },
    { id: 2, name: 'Topic & Desc', icon: HiOutlineDocumentText },
    { id: 3, name: 'Options', icon: HiOutlineCog }
  ];
  const [loading, setLoading] = useState(false)

  const isGenerateButtonEnabled = 
    !!userCourseInput.difficulty &&
    !!userCourseInput.length &&
    !!userCourseInput.video &&
    !!userCourseInput.noOfchapters;

  const {user} = useUser();
  const router = useRouter();

  const handleNext = () => {
    if (activeIndex < StepperOptions.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleGenerateCourse = async () => {
    setLoading(true)
    const BASIC_PROMPT = "Generate a Course Tutorial on Following Detail with Field as Course Name, Description, Along with Chapter Name, about, Duration: "
    const USER_INPUT_PROMPT = `Category: ${userCourseInput?.category}, Topic: ${userCourseInput?.topic}, Description: ${userCourseInput?.description}, Level: ${userCourseInput?.difficulty}, NoOfChapters: ${userCourseInput?.noOfchapters}, Length: ${userCourseInput?.length}, Include Video: ${userCourseInput?.video} in JSON Format`
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT
    
    console.log(FINAL_PROMPT);
    const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT)
    console.log(result.response?.text)
    console.log(JSON.parse(result.response?.text()))
    setLoading(false)
    SaveCourseLayoutInDb(JSON.parse(result.response?.text()))
    // Here you would typically send this prompt to your AI service
  };

  const SaveCourseLayoutInDb = async (courseLayout) => {
    // Generate a new UUID
var id = uuid4();

    setLoading(true)
    const result = await db.insert(CourseList).values({
      courseId: id,
      name: userCourseInput?.topic,
      level: userCourseInput?.difficulty,
      category: userCourseInput?.category,
      courseOutput: courseLayout,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      userProfileImage:user?.imageUrl
    })
    console.log("Finished Saving in DB")
    router.replace(`/create-course/${id}`)
    setLoading(false)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Write Blogs with AI</h1>
      <div className='flex justify-between items-center mb-8 relative'>
        {StepperOptions.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className='flex flex-col items-center z-10'>
              <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-2 ${activeIndex >= index ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <p className='text-sm font-medium text-gray-600'>{item.name}</p>
            </div>
          );
        })}
        {/* Horizontal lines */}
        <div className='absolute top-8 left-0 right-0 h-0.5 bg-gray-300' style={{width: 'calc(100% - 4rem)'}}></div>
      </div>

      {/* Component */}
      <div className="mt-8">
        {activeIndex === 0 && <SelectCategory />}
        {activeIndex === 1 && <TopicDescription />}
        {activeIndex === 2 && <SelectOption />}
      </div>

      {/* Course Content */}
      <div className="mt-8">
        {/* Add your course content section here */}
      </div>

      {/* Course Settings */}
      <div className="mt-8">
        {/* Add your course settings section here */}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <Button onClick={handlePrevious} disabled={activeIndex === 0}>
          Previous
        </Button>
        {activeIndex === StepperOptions.length - 1 ? (
          <Button onClick={handleGenerateCourse} disabled={!isGenerateButtonEnabled}>
            Generate Course
          </Button>
        ) : (
          <Button onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
      {generatedPrompt && (
        <div className="mt-8 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Generated Prompt:</h2>
          <p>{generatedPrompt}</p>
        </div>
      )}
      <LoadingDialog loading={loading} />
    </div>
  );
}

export default CreateCourse