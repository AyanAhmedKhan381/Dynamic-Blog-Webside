import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';
import Wrapper from '@/components/Wrapper';



const Page = async ({ params }: any) => {
  const { slug } = await  params;  // Directly access slug without awaiting

  const query = groq`
    *[_type == "blog" && slug.current == $slug][0] {
      title,
      description,
      Description,
      image {
        asset->{
          url
        }
      },
      image2 {
        asset->{
          url
        }
      },
      author->{
        name,
        description,
        image {
          asset->{
            url
          }
        }
      },
      publishedAt
    }
  `;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Wrapper className="mb-10 bg-black text-white">
      <div className="text-black flex flex-col md:flex-row items-center pt-20 mt-20 mb-10">
        <div className="w-full">
          <div>
            {blog.image?.asset?.url ? (
              <Image
                src={urlFor(blog.image).url()}
                alt={blog.title}
                width={600}
                height={400}
                className="object-cover rounded-md w-full"
              />
            ) : (
              <div>No image available</div>
            )}
          </div>

          <div className="w-full mt-5 text-white">
            <h1 className="text-3xl">{blog.title}</h1>
            <p className="mt-3">{blog.description}</p>
            <p className="mt-3">{new Date(blog.publishedAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 w-full md:w-2/6 space-x-4 ml-7 mr-4">
          {blog.author?.image?.asset?.url ? (
            <Image
              src={urlFor(blog.author.image).url()}
              alt={blog.author.name}
              width={100}
              height={60}
              className="rounded-full"
            />
          ) : (
            <div>No author image available</div>
          )}

          <div className="text-center mx-auto items-center w-full text-white">
            <span className="font-semibold text-xl text-white">{blog.author?.name}</span>
            {blog.author?.description && (
              <p className="text-sm mt-1 text-white">{blog.author.description}</p>
            )}
          </div>

          <div className="flex items-center space-x-4 mt-6 mb-72">
            <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-700 duration-300 transition-all hover:scale-105" />
            <FaTwitter className="w-6 h-6 text-sky-600 hover:text-sky-700 duration-300 transition-all hover:scale-105" />
            <FaYoutube className="w-6 h-6 text-red-500 hover:text-red-600 duration-300 transition-all hover:scale-105" />
            <FaInstagram className="w-6 h-6 text-red-600 hover:text-red-700 duration-300 transition-all hover:scale-105" />
            <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-800 duration-300 transition-all hover:scale-105" />
          </div>
        </div>
      </div>

      <div className="text-black flex items-center pt-20 mt-20 mb-10">
        <div className="w-full md:w-[80%]">
          <div>
            {blog.image2?.asset?.url ? (
              <Image
                src={urlFor(blog.image2).url()}
                alt={blog.title}
                width={600}
                height={400}
                className="object-cover rounded-md w-full"
              />
            ) : (
              <div>No image available</div>
            )}
          </div>

          <div className="w-full mt-5 text-white">
            <h1 className="text-3xl">{blog.title}</h1>
            <p className="mt-3">{blog.Description}</p>
            <p className="mt-3">{new Date(blog.publishedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
