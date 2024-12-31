import BlogContent from "@/components/BlogContent/BlogContent";
import Hero from "@/components/Hero/Hero";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";




const query = groq`*[_type == "blog"] {
  ...,
  author->,
  category->
} | order(_createdAt asc)`;


export default async function Home() {

  const blogs = await client.fetch(query)

  return (
   <div className="">
    <Hero title={"Tech Insights"} image={'/images/tech-blogs-1-1536x864.jpg'}/>
    <BlogContent blogs={blogs}/>
   </div>
  );
}
