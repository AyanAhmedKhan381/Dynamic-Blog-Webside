import Hero from '@/components/Hero/Hero'
import RouteBlogs from '@/components/RouteBlogs';
import { client } from '@/sanity/lib/client';


import { groq } from "next-sanity";



const query = groq`*[_type == "blog"] {
  ...,
  author->,
  category->
} | order(_createdAt asc)`;



const page  = async () => {

  const blogs = await client.fetch(query)
    

  return (
    <div>
      <div className="">
    <Hero title={"Blogs"} image={'/images/The-Future-Of-Technology-What-To-Expect-In-The-Next-Decade.webp'}/>
    <RouteBlogs blogs={blogs}/>
   </div>
    </div>
  )
}

export default page
