import React, { useContext, useState } from 'react'
import Image from 'next/image'
import CategoryList from '@/app/_shared/CategoryList'
import { UserInputContext } from '@/app/_context/UserInputContext'

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext)
  const [selectedCategory, setSelectedCategory] = useState(userCourseInput?.category || null)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setUserCourseInput(prev => ({
      ...prev,
      category: category
    }))
  }

  return (
    <div className='px-10 md:px-20'>
      <h2 className='my-5 text-2xl font-semibold'>Select the Course Category</h2>
      <div className='grid grid-cols-3 gap-10'>
        {CategoryList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-5 border 
              items-center rounded-xl hover:border-blue-500 
              cursor-pointer 
              ${selectedCategory === item.name ? 'border-blue-500 bg-blue-50' : ''}
            `}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image src={item.icon} width={50} height={50} alt={item.name} />
            <h2 className='text-sm mt-2'>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectCategory