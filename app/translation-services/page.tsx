import ImageTextLayout from '@/components/ImageText'
import finance from '@/public/images/Pasted image.png'
import Star from '@/public/images/star.svg'
import timer from '@/public/images/timer.svg'
import insurance from '@/public/images/insurance.svg'
import React from 'react'
import three from '@/public/images/two-women-helping-man-with-project.jpg'
import tranlationPerson from '@/public/images/translation-person.jpg'
import translationRelative from '@/public/images/translation-relative.jpg'
import dots from '@/public/images/dots.svg'
import Image from 'next/image'

function page() {
  return (
    <div className='w-full mt-10'>
<div className="relative overflow-hidden [clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)]">
  <div className="flex justify-center items-center">
    <div className="bg-gray-100 w-full flex justify-center py-8 px-6 text-center z-50 h-[28rem]">
      <div className="max-w-[66rem]">

        <h2 className="text-3xl font-bold mb-4 my-10 text-blue-500 tracking-wide">Professional Translation Services</h2>
        <p className="text-sm tracking-wide leading-[2]">
          At HD Translation and Localization, we provide quick, budget-friendly, and expert translation services for individuals and businesses. Our skilled translators bring extensive experience and deep knowledge across various content types. With our services, you can overcome language barriers and connect seamlessly with your global audience. Whether you need translations urgently or in the future, our dedicated team ensures reliable and precise services, whenever you need them.
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
<div className="mt-10">
<ImageTextLayout
  header='Your Trusted Translation Agency'
  paragraph={
    <div>
      <p >
        As global markets open, professional language translation services are experiencing higher demand than ever.
       This has resulted in more companies offering automated translations that are ridden with errors and do not get
        your message across. At HD Translation and Localization, we are committed to providing high-quality and accurate 
        translations to the highest standards. With a network of over 400 experts, we offer translation services in hundreds of{' '}
        <a href="/languages" className="text-blue-500 inline hover:text-blue-700">language pairs</a>.
      </p>
      <p>
        To ensure high-quality translation and excellent results, we adopt a strict translation process which includes translation, editing, and proofreading. We also believe in the power of human translations and native translators who guarantee excellent results. With our professional translation services, you can quickly enter foreign markets, grow your business, and reap the rewards.
      </p>
    </div>
  }
  imagePosition='right'
  imageSrc={three}
/>

</div>
<div className="mt-10">
<ImageTextLayout
  header='Your Trusted Translation Agency'
  paragraph={
    <div>
      <p>
      Our professional translation services are exclusively performed by native speakers of the target language. 
      For example, if you need a translation from English to Spanish, a Spanish native speaker, from your regional 
      variant, will work on your translation. The translator will have extensive experience in your content type and 
      our team will also use advanced translation tools to enhance the quality of translation. Our quality assurance 
      does not only include the checking for spelling mistakes and grammatical errors. It also includes a thorough check
       for tone and other cultural nuances. This is a three-step translation process that helps us guarantee 100% accurate translations.
        We will always ensure that your documents are closely checked at each stage of the process, and make sure that no errors ever slip through the cracks.
      </p>
    </div>
  }
  imagePosition='left'
  imageSrc={three}
/>

</div>
<div className="mt-10">
<ImageTextLayout
  header='Global Translators Services'
  paragraph={
    <div>
      <p>
      We adopt a meticulous customer care policy that has helped us build prosperous relationships with local and global clients. We regularly provide accurate translations business worldwide and many reputable brands return to use our professional language translation services, including You tube, Meta, Google, And DSTV. Below is a review from one of our happy customers:
“I have used HD Translation and Localization for multiple translation projects over the years. I am always impressed by the quality and accuracy of their work – it’s always error-free and ready to distribute even with tight deadlines.”
      </p>
    </div>
  }
  imagePosition='right'
  imageSrc={three}
/>
</div>
<div className="mt-10">
<ImageTextLayout
  header='Specialised Translators in All Industries  '
  paragraph={
    <div>
      <p>
      We have the capacity to provide professional translation services for unique and diverse projects. Regardless of your project’s size, file format, tone of voice, or subject matter 
      expertise, our network has the resources available to exceed your expectations. We have an extensive experience in various market sectors and frequently provide
      <span className='text-customeprimary'> medical translation, legal translation, scientific translation, marketing translation, </span>
       and much more. Start translating with our dedicated and professional translators services today. We look forward to working with you.
  </p>
    </div>
  }
  imagePosition='left'
  imageSrc={three}
/>
</div>
    <div className="mt-5 py-10 bg-[#F7F7F7]">
  <div className="mx-auto max-w-6xl px-4 font-[sans-serif] text-[#333]">
    <div className="text-left">
      <h2 className="text-3xl text-center text-customeprimary font-extrabold">Translation Technology</h2>
    </div>
    <div className="grid lg:grid-cols-3 justify-center items-center md:grid-cols-2 gap-x-12 gap-y-10 mt-16">
      <div className="text-left">
        <h3 className="text-center text-xl font-semibold mb-2">Translation Memory (TM)</h3>
        <p className="tracking-wider leading-relaxed text-sm">A translation memory (TM) is a database where our expert team stores segments of previously translated text. Our professional translators use this database to help find the right words quickly, improving accuracy, consistency, and efficiency in our language translation services.</p>
      </div>
      <div className="text-left">
        <h3 className="text-center font-semibold mb-2">CAT Tools Software</h3>
        <p className="tracking-wider leading-relaxed text-sm">Computer-assisted translation tools (CAT) aid our human translators with their translation services. Using a variety of software, we pull words and phrases from the TM to guarantee consistent quality, alongside streamlining editing and storing procedures within our translation agency.</p>
      </div>
      <div className="text-left">
        <h3 className="text-center font-semibold mb-2">Professional Project Management</h3>
        <p className="tracking-wider leading-relaxed text-sm">We rely on an advanced project management software to allow instant tracking and reporting of all ongoing and past projects. This helps us work to quick turnarounds and collaborate effortlessly between different teams to provide professional translation services.</p>
      </div>     
    </div>
  </div>
</div>

  </div>
  )
}

export default page