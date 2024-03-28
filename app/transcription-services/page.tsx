import ImageTextLayout from '@/components/ImageText'
import finance from '@/public/images/Pasted image.png'
import Star from '@/public/images/star.svg'
import timer from '@/public/images/timer.svg'
import insurance from '@/public/images/insurance.svg'
import React from 'react'
import three from '@/public/images/two-women-helping-man-with-project.jpg'
import tranlationPerson from '@/public/images/transcrition-woman.jpg'
import translationRelative from '@/public/images/transcription-man2.jpg'
import happyemploye from '@/public/images/happy-employee.png'
import studyHeadphone from '@/public/images/study-headphone.jpg'
import dots from '@/public/images/dots.svg'
import Image from 'next/image'

function page() {
  return (
    <div className='w-full mt-10'>
<div className="relative overflow-hidden [clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)]">
  <div className="flex justify-center items-center">
    <div className="bg-gray-100 w-full flex justify-center py-8 px-6 text-center z-50 h-[28rem]">
      <div className="max-w-[66rem]">

        <h2 className="text-3xl font-bold mb-4 my-10 text-blue-500 tracking-wide">Professional Transcription Services</h2>
        <p className="text-sm tracking-wide leading-[2]">
        At HD Translation and Localization, we provide affordable and professional transcription services to businesses. In today's digital age, utilizing videos for effective brand communication, product promotion, and sales is crucial. Whether it's for training materials, self-learning content, or global customer support, videos and audios play a key role. Our skilled native speakers, proficient in over 50 languages across various sectors, support your business's global expansion. From simple interviews to extensive recordings, we handle projects of all sizes with accuracy and efficiency. Count on us for reliable transcriptions that won't strain your budget. Entrust your video and audio transcription needs to us, and let's together expand your presence into global markets.
        </p>
      </div>
    </div>
  </div>
</div>
 <div className="flex justify-center items-center mt-10">
<div  className='max-w-[70rem] '>
<div className="mx-auto" >
<div className="w-full mx-auto flex lg:justify-between justify-center items-center flex-col lg:flex-row">
  <div className="lg:w-[50%] w-[90%]">
    <h3 className="text-3xl text-customeprimary font-bold mb-2">Why Choose Us?</h3>
    <div className="leading-6 tracking-wide">
      <p>
        HD Translation and Localization is your go-to translation agency. Our expert team will meet your specific requirements and can provide comprehensive language translation services, consistent results and reliable service.
      </p>
    </div>
    <div className="grid grid-cols-1  justify-center items-center lg::grid-cols-1 md:grid-cols-2 gap-3 mt-6">
  <div className="flex gap-2 justify-center items-center">
    <span className="rounded-full w-11 h-11 justify-center items-center bg-customeprimary p-2 hover:cursor-pointer inline-flex">
      <Image src={Star} width={21} height={21} alt='star' objectFit='cover' className="transition-transform transform hover:scale-110" />
    </span>
    <div className="flex flex-col gap-2 justify-center items-center ml-3">
      <h1 className="text-lg font-bold text-[#343F52]">Excellent Quality</h1>
      <p className="md:max-w-48 max-w-96 text-sm">Our well-vetted native translators will deliver professional translation services every time.</p>
    </div>
  </div>
  <div className="flex gap-2 justify-center items-center">
    <span className="rounded-full w-11 h-11 justify-center items-center bg-customeprimary p-2 hover:cursor-pointer inline-flex">
      <Image src={finance} width={21} height={21} alt='star' objectFit='cover' className="transition-transform transform hover:scale-110" />
    </span>
    <div className="flex flex-col gap-2 justify-center items-center ml-3">
      <h1 className="text-lg font-bold text-[#343F52]">Affordable Rates</h1>
      <p className="md:max-w-48 max-w-96 text-sm">Our accurate translating services are offered at several price options to suit all budgets.</p>
    </div>
  </div>
  <div className="flex gap-2 justify-center items-center">
    <span className="rounded-full w-11 h-11 justify-center items-center bg-customeprimary p-2 hover:cursor-pointer inline-flex">
      <Image src={timer} width={21} height={21} alt='star' objectFit='cover' className="transition-transform transform hover:scale-110" />
    </span>
    <div className="flex flex-col gap-2 justify-center items-center ml-3">
      <h1 className="text-lg font-bold text-[#343F52]">Quick Turnaround</h1>
      <p className="md:max-w-48 max-w-96 text-sm">We use innovative tools to speed up our translation services and meet all turnarounds.</p>
    </div>
  </div>
  <div className="flex gap-2 justify-center items-center">
    <span className="rounded-full w-11 h-11 justify-center items-center bg-customeprimary p-2 hover:cursor-pointer inline-flex">
      <Image src={insurance} width={21} height={21} alt='star' objectFit='cover' className="transition-transform transform hover:scale-110" />
    </span>
    <div className="flex flex-col gap-2 justify-center items-center ml-3">
      <h1 className="text-lg font-bold text-[#343F52]">Insurance Coverage</h1>
      <p className="md:max-w-48 max-w-96 text-sm">We provide our clients with broad protection through full professional indemnity insurance.</p>
    </div>
  </div>
</div>

  </div>
  <div className="relative lg:ml-0 ml-36 mt-5" >
  <Image src={dots} width={400}  alt='dots' className='absolute top-10 -left-20 -z-10 rounded w-20' />
  <Image src={translationRelative} width={400} height={350} alt='transltion-relative' className='rounded-md ' />
  <Image src={tranlationPerson} width={280} alt='transltion-relative' className='absolute -left-36 bottom-0 rounded-md' />
</div>
</div>
</div>
</div>
 </div>
<div className="mt-20">
<ImageTextLayout
  header='Your Trusted Transcription Agency'
  paragraph={
    <div>
      <p >
      Our translators can transcribe directly from an audio file to a written document 
      in your preferred language. Simply upload your file to our server, and our transcription
       and translation team will get to work! We can also work with most formats and use the standard
        preferred format for transcripts, with or without time codes. The audio transcription will be sent
         back to you in your preferred format for you to instantly share with your audience. It is this flexible 
         approach that makes us a trusted company for many businesses. To improve our services, we also rely on the 
         use of transcription and translation tools. These help us streamline processes, efficiently manage projects and 
         ensure 100% accuracy. Our three-stage TEP method for{' '}
        <a href="/languages" className="text-blue-500 inline hover:text-blue-700">professional translations </a>.
      </p>
      <p>
      further ensures quality with every project we undertake.
      </p>
    </div>
  }
  imagePosition='right'
  imageSrc={happyemploye}
/>

</div>
<div className="mt-20">
<ImageTextLayout
  header='Professional Services For Multiple Industries'
  paragraph={
    <div>
      <p>
      Our business transcription services are also available across multiple industries. 
      Whether you need transcriptions of meetings, conferences and presentations, medical interviews 
      or legal proceedings, we can help. This is thanks to our diverse team of talented translators who 
      have backgrounds in different fields. They particularly understand the nuances and formalities of different industries,
       ensuring the message perfectly reflects the original. We also operate in a global market and can translate to and from over 50 
       different languages. Regardless of which sector or country your content is intended for, our professional team will give you stand-out
        transcriptions ready
        to distribute to your audience.
      </p>
    </div>
  }
  imagePosition='left'
  imageSrc={studyHeadphone}
/>

</div>
<div className="mt-20">
<ImageTextLayout
  header='Global Transcription Services'
  paragraph={
    <div>
      <p>
      As an advocate for cross-cultural work and globalisation, we offer our services to anyone 
      from anywhere. Indeed, our approach to our work makes us the trusted partner of many businesses
       across the globe. Below are just some of the reviews from our happy customers. “HD Translation and Localization 
       offered us professional transcription services and quick turnarounds every time. We have used them for multiple projects 
       for training our global team and we would recommend them for any transcription queries.” “I always use this agency and can’t 
       imagine hiring anywhere else. Their audio transcriptions are perfect and help me connect with a global audience with ease. Thanks HD Translation and Localization!”
      </p>
    </div>
  }
  imagePosition='right'
  imageSrc={happyemploye}
/>
</div>
  </div>
  )
}

export default page