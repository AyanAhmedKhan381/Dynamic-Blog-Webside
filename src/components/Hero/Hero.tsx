import Image from "next/image";

interface Props {
  title: string;
  image: string
}

const Hero = ({ title, image }: Props) => {
  return (
    <div className="relative">

      <Image 
        src={image}
        alt="image"
        width={500}
        height={500}
        className="w-full pt-[4vh] md:pt-[12vh] h-[100vh] bg-cover bg-center bg-[#0f0715] overflow-hidden"
      />

      {/* black overlay */}
      <div className='absolute top-0 left-0 inset-0 bg-black opacity-70'></div>

      {/* content */}
      <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col w-full h-full mx-auto z-10'>
        
        <h1 className='text-white font-bold text-3xl sm:text-8xl mt-4 text-center'>
          {title}
        </h1>

        <p className='mt-4 text-center font-bold text-lg sm:text-xl text-gray-100'>
          Learn, Innovate, Inspire, Lead
        </p>

      </div>

    </div>
  );
};

export default Hero;
