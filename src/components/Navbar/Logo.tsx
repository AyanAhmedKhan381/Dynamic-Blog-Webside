

import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Logo = ({className}:{className?:string}) => {
  return (
    <Link href={"/"}>

      <h2 className={twMerge('text-2xl text-gray-500 overflow-hidden  group hover:text-darkOrange font-bold uppercase relative', className)}>
      Blog Haven

        <span className='absolute left-0 bottom-0 w-full h-[2px] bg-darkOrange
        -translate-x-[105%] hoverEffect group-hover:translate-x-0'></span>
    </h2>
    </Link>
  )
}

export default Logo
