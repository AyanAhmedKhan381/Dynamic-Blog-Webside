import { Blog } from '@/sanityTypes'
import React from 'react'
import Wrapper from '../Wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { FaArrowRightLong } from "react-icons/fa6";
import { HiCalendar } from 'react-icons/hi'

interface Props {
  blogs: Blog[];
}

const BlogContent = ({ blogs }: Props) => {

  return (
    <Wrapper className='bg-gray-100 py-20 px-6 md:px-10 flex flex-col gap-10 rounded-xl shadow-lg'>
      {blogs.map((item, i) => (
        <Link href={`/blog/${item.slug.current}`} key={i}>
          <div className='w-full hover:scale-105 transition-all duration-300'>
            <div className='relative bg-white p-4 rounded-lg group shadow-md flex flex-col md:flex-row hover:shadow-xl'>
              <div className='relative w-full md:w-1/2'>
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  width={400}
                  height={400}
                  className='w-full max-h-[500px] object-cover rounded-lg mb-4 transition-all duration-300'
                />
                <div className='absolute group top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-all duration-300 rounded-lg'></div>
                <div className='absolute bottom-6 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                  <button className='px-4 py-2 flex gap-3 border border-gray-200 hover:animate-none text-white rounded-md font-semibold'>
                    Read More <FaArrowRightLong className='mt-1.5'/>
                  </button>
                </div>
              </div>
              <div className='mt-4 w-full md:w-1/2 mx-auto ml-5'>
                <h3 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-base line-clamp-5 md:line-clamp-none'>{item.description}</p>
                
                {/* Icons for Date and Like */}
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
                      src={urlFor(item.author.image).url()} // Assuming the author image is stored in 'authorImage'
                      alt={"image"} // Assuming the author name is stored in 'author'
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
    </Wrapper>
  )
}

export default BlogContent
