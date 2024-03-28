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
    <div>
      <Image src={village} height={200} alt="Banner Image" className=" w-full mx-auto rounded-lg  md:h-full object-cover filter " />
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold my-8 mx-20 text-center text-blue-400">
        We are a leading translation company providing language services for
        clients worldwide
      </h1>
      <div className="flex flex-col md:flex-row mt-8">
        <div className="md:w-1/2">
          <img
            src={aboutUsData.aboutUsIntro.image}
            alt="About Us Intro Image"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <p>{aboutUsData.aboutUsIntro.text}</p>
        </div>
      </div>
      <div className="w-full mx-auto flex lg:justify-between justify-center items-center flex-col lg:flex-row">
  <div className="lg:w-[50%] w-[90%]">


</div>

  </div>
  <div className="relative lg:ml-0 ml-36 mt-5" >
  <Image src={dots} width={400}  alt='dots' className='absolute top-10 -left-20 -z-10 rounded w-20' />
  <Image src={translationRelative} width={400} height={350} alt='transltion-relative' className='rounded-md ' />
  <Image src={tranlationPerson} width={280} alt='transltion-relative' className='absolute -left-36 bottom-0 rounded-md' />
</div>
</div>
      <div className="grid grid-cols-2 w-full p-10 rounded-md md:grid-cols-4 gap-4 items-center"
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

      <div className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-14">
        <div className="md:w-1/2 pt-28">
          <img
            src={aboutUsData.ourStory.image}
            alt="Our Story Image"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-5 text-blue-500">Our Story</h2>
          <p>{aboutUsData.ourStory.text}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8">
        <div className="md:w-1/2">
          <img
            src={aboutUsData.ourMission.image}
            alt="Our Mission Image"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <p>{aboutUsData.ourMission.text}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8">
        <div className="md:w-1/2">
          <img
            src={aboutUsData.whatSetsUsApart.image}
            alt="What Sets Us Apart Image"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <p>{aboutUsData.whatSetsUsApart.textOne}</p>
          <p>{aboutUsData.whatSetsUsApart.textTwo}</p>
          <br />
        </div>
      </div>

      {/* Add more story blocks here */}
    </div>
  );
};

export default Page;
