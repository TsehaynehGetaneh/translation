import aboutUsData from "@/data/about-us/aboutUs.json";
import StatisticsCard from "@/components/StaticsCard";
import statimage from '@/public/images/5.png'
import village from '@/public/images/home.jpg'

import tranlationPerson from '@/public/images/translation-person.jpg'
import translationRelative from '@/public/images/translation-relative.jpg'
import dots from '@/public/images/dots.svg'
import Image from 'next/image'

const Page: React.FC = () => {
  return (
    <div >
      <Image src={village} height={200} alt="Banner Image" className=" w-full mx-auto rounded-lg  md:h-full object-cover filter " />
    <div className="flex flex-col items-center mx-20 ">
      <h1 className="text-4xl font-bold my-8 max-w-4xl text-center text-blue-400">
        We are a leading translation company providing language services for
        clients worldwide
      </h1>
      <div className="flex flex-col lg:flex-row mt-8 lg:gap-x-48 justify-center items-center mx-auto max-w-screen-xl">
      <div className="lg:w-1/2 mt-4 md:mt-0 leading-relaxed p-2">
        <p className="text-sm tracking-wide leading-6">{aboutUsData.aboutUsIntro.text}</p>
    </div>
    <div className="relative lg:ml-0 ml-36 mt-5">
        <Image src={dots} width={400} alt='dots' className='absolute top-10 -left-20 -z-10 rounded w-20' />
        <Image src={translationRelative} width={400} height={350} alt='transltion-relative' className='rounded-md ' />
        <Image src={tranlationPerson} width={280} alt='transltion-relative' className='absolute -left-36 bottom-0 rounded-md' />
    </div>
</div>
</div>
      <div className="grid grid-cols-2 mt-10 w-full p-10 rounded-md md:grid-cols-4 gap-4 items-center"
      style={{ 
        backgroundImage: `url(${typeof statimage === 'string' ? statimage : statimage.src})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      <StatisticsCard number={1500} label="Completed Projects" />
      <StatisticsCard number={400} label="Satisfied Clients" />
      <StatisticsCard number={50} label="Available Languages" />
      <StatisticsCard number={400} label="Professional Translators" />
    </div>

    <div className="flex flex-col items-center mx-20  ">
      <div className="flex flex-col  lg:flex-row mt-8 lg:gap-10 lg:items-center justify-end items-center  mx-auto w-full lg:max-w-screen-xl">
    <div className="relative lg:ml-0 ml-44 mt-5">
        <Image src={dots} width={400} alt='dots' className='absolute top-10 -left-20 -z-10 rounded w-20' />
        <Image src={translationRelative} width={400} height={350} alt='transltion-relative' className='rounded-md ' />
        <Image src={tranlationPerson} width={280} alt='transltion-relative' className='absolute -left-36 bottom-0 rounded-md' />
    </div>
    <div className="lg:w-1/2  mt-4 md:mt-0 leading-relaxed p-2">
    <h1 className="text-2xl font-bold mb-5 text-left text-blue-400">
      Our Story
      </h1>
        <p className="text-sm tracking-wide leading-6">{aboutUsData.ourStory.text}</p>
    </div>
</div>
</div>

<div className="flex flex-col items-center mx-20 ">
      <div className="flex flex-col lg:flex-row mt-8 lg:gap-x-48 justify-center items-center mx-auto max-w-screen-xl">
      <div className="lg:w-1/2 mt-4 md:mt-0 leading-relaxed p-2">
      <h1 className="text-2xl font-bold mb-5 text-left text-blue-400">
      Our Mission
      </h1>
        <p className="text-sm tracking-wide leading-6">{aboutUsData.ourMission.text}</p>
    </div>
    <div className="relative lg:ml-0 ml-36 mt-5">
        <Image src={dots} width={400} alt='dots' className='absolute top-10 -left-20 -z-10 rounded w-20' />
        <Image src={translationRelative} width={400} height={350} alt='transltion-relative' className='rounded-md ' />
        <Image src={tranlationPerson} width={280} alt='transltion-relative' className='absolute -left-36 bottom-0 rounded-md' />
    </div>
</div>
</div>
 
<div className="flex flex-col items-center mx-20  ">
      <div className="flex flex-col  lg:flex-row mt-8 lg:gap-10 lg:items-center justify-end items-center  mx-auto w-full lg:max-w-screen-xl">
    <div className="relative lg:ml-0 ml-44 mt-5">
        <Image src={dots} width={400} alt='dots' className='absolute top-10 -left-20 -z-10 rounded w-20' />
        <Image src={translationRelative} width={400} height={350} alt='transltion-relative' className='rounded-md ' />
        <Image src={tranlationPerson} width={280} alt='transltion-relative' className='absolute -left-36 bottom-0 rounded-md' />
    </div>
    <div className="lg:w-1/2  mt-4 md:mt-0 leading-relaxed p-2">
    <h1 className="text-2xl font-bold mb-5 text-left text-blue-400">
    What Sets Us Apart
      </h1>
      <p className="text-sm tracking-wide leading-6">{aboutUsData.whatSetsUsApart.textOne}</p>
      <p className="text-sm mt-5 tracking-wide leading-6">{aboutUsData.whatSetsUsApart.textTwo}</p>
    </div>
</div>
</div>
      {/* Add more story blocks here */}
    </div>
  );
};

export default Page;
