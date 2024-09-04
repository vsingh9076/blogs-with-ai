import React, { useContext } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { UserInputContext } from '@/app/_context/UserInputContext'


function SelectOption() {
    const {userCourseInput, setUserCourseInput}=useContext(UserInputContext)
    const handleInputChange=(fieldName, value)=>{
        setUserCourseInput(prev=>({
            ...prev,
            [fieldName]:value
        }))
    }
    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <label className='text-sm'>Difficulty Level</label>
                    <Select onValueChange={(value)=>handleInputChange('difficulty', value)}
                        defaultValue={userCourseInput?.difficulty}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>Blog Length</label>
                    <Select 
                        onValueChange={(value) => handleInputChange('length', value)}
                        defaultValue={userCourseInput?.length}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 Hour">1 Hour</SelectItem>
                            <SelectItem value="2 Hours">2 Hours</SelectItem>
                            <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>Add Video</label>
                    <Select onValueChange={(value)=>handleInputChange('video', value)}
                        defaultValue={userCourseInput?.video}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>No of Chapters</label>
                    <Input type='number' className='h-10'
                    defaultValue={userCourseInput?.noOfchapters}
                    value={userCourseInput?.noOfchapters}
                    onChange={e=>handleInputChange('noOfchapters', e.target.value)}
                    />
                </div>

            </div>
        </div>
    )
}

export default SelectOption