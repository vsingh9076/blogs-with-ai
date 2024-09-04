import React, { useContext } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { UserInputContext } from '@/app/_context/UserInputContext'

function TopicDescription() {
    const {userCourseInput, setUserCourseInput}=useContext(UserInputContext)
    const handleInputChange=(fieldName, value)=>{
        setUserCourseInput(prev=>({
            ...prev,
            [fieldName]:value
        }))
    }
  return (
    <div>
        {/* Input Topic */}
        <div>
            <label>Write Topic for your Blog</label>
            <Input placeholder={'Topic'} className="h-14 text-xl" 
            defaultValue={userCourseInput.topic}
            value={userCourseInput.topic}
            onChange={e=>handleInputChange('topic', e.target.value)}
            />
        </div>
        <div className='mt-4'>
            <label>Blog Description</label>
            <Textarea placeholder={'Description'} 
            defaultValue={userCourseInput.description}
            value={userCourseInput.description}
            onChange={e=>handleInputChange('description', e.target.value)}
            />
        </div>
        {/* Text Area Description */}

    </div>
  )
}

export default TopicDescription