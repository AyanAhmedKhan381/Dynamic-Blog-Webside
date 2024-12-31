
import Hero from '@/components/Hero/Hero'
import FeaturesContent from '@/components/FeaturesContent';
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
    <Hero title={"Features Blogs"} image={'/images/436108.jpg'}/>
    <FeaturesContent blogs={blogs}/>
   </div>
    </div>
  )
}

export default page
