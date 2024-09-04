import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-md'>
        <Image src="/next.svg" width={100} height={100} />
        <Button>Get Started</Button>
    </div>
  )
}

export default Header