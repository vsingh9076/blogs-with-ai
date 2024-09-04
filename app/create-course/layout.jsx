'use client'
import React from 'react'
import Header from '../_components/Header'
import { UserInputContext } from '../_context/UserInputContext'
import { useState } from 'react'

function CreateCourseLayout({ children }) {
    const [userCourseInput, setUserCourseInput] = useState([UserInputContext])

    const handleCategoryChange = (category) => {
        setUserCourseInput({
            ...prev,
            category
        })
    }

  return (
    <div>
        <UserInputContext.Provider value={{
            userCourseInput,
            setUserCourseInput
        }}>
        <Header />
        {children} 
        </UserInputContext.Provider>
    </div>
  )
}

export default CreateCourseLayout