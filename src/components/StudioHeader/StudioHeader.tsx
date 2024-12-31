import Link from 'next/link'
import React from 'react'
import { IoReturnDownBack } from 'react-icons/io5'
import Logo from '../Navbar/Logo';

const StudioHeader = ({ renderDefault, props }: { renderDefault?: Function; props?: any }) => {
  return (
    <div className=''>
      <div className='p-3.5 text-white bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <div className='shadow-white shadow-sm py-1 w-fit px-5 rounded-xl animate-pulse bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 duration-300 hover:animate-none'>
            <Link href="/" className='flex items-center'>
              <IoReturnDownBack className='text-2xl mr-1' aria-hidden="true" /> 
              Go to Website
            </Link>
          </div>
          <Logo className='text-white ml-96 left-24 hover:text-accentWhite items-center text-center justify-center hover:texwh' />
        </div>
        <p className='hidden md:inline-flex text-sm'>
          Admin Studio For Prime Market Online Shopping
        </p>
      </div>
      {renderDefault ? renderDefault(props) : <p>Error: renderDefault function not found</p>}
    </div>
  )
}

export default StudioHeader
