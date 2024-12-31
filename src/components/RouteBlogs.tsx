import { Blog } from '@/sanityTypes'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { FaArrowRightLong } from "react-icons/fa6"
import { HiCalendar } from 'react-icons/hi'
import Wrapper from './Wrapper'

interface Props {
  blogs: Blog[];
}

const RouteBlogs = ({ blogs }: Props) => {
  return (
    <Wrapper className='bg-gray-100 py-20 px-6 md:px-10 rounded-xl shadow-lg'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {blogs.map((item, i) => (
          <Link href={`/blog/${item.slug.current}`} key={i}>
            <div className='hover:scale-105 transition-all duration-300'>
              <div className='relative bg-white p-4 rounded-lg group shadow-md flex flex-col hover:shadow-xl'>
                
                {/* Image Section */}
                <div className='relative w-full mb-4'>
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={400}
                    height={400}
                    className='w-full max-h-[300px] object-cover rounded-lg transition-all duration-300'
                  />
                  <div className='absolute group top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-all duration-300 rounded-lg'></div>
                  <div className='absolute bottom-6 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    <button className='px-4 py-2 flex gap-3 border border-gray-200 hover:animate-none text-white rounded-md font-semibold'>
                      Read More <FaArrowRightLong className='mt-1.5'/>
                    </button>
                  </div>
                </div>

                {/* Text Section */}
                <div className='mt-4'>
                  <h3 className='text-2xl font-semibold text-gray-800 line-clamp-1 mb-2'>{item.title}</h3>
                  <p className='text-gray-600 text-base line-clamp-4'>{item.description}</p>

                  {/* Icons for Date and Author */}
                  <div className='mt-4 flex items-center justify-between gap-6 text-gray-600'>
                    <div className='flex items-center gap-1'>
                      <HiCalendar className='text-xl' />
                      <span>{new Date(item.publishedAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}</span>
                    </div>

                    {/* Author Image and Name */}
                    <div className='flex items-center gap-2'>
                      <Image
                        src={urlFor(item.author.image).url()}
                        alt={item.author.name}
                        width={30}
                        height={30}
                        className='w-8 h-8 rounded-full object-cover'
                      />
                      <span className='text-gray-700'>{item.author.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  )
}

export default RouteBlogs
