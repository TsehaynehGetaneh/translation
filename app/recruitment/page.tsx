import React from 'react';
import Image from 'next/image';
import two from '@/public/images/threediscus.jpg';
import banner from '@/public/images/banner.png'
import Link from 'next/link';

function Page() {
  return (
    <div className='w-full'>
    <div className="font-sans text-[#F9F9F9] relative">
    <div className="h-80">
  <img src={banner.src} alt="Banner Image" className="w-full h-full object-cover" />
</div>
      <div className="relative -mt-36 mx-4">
        <div className="mx-auto max-w-5xl bg-white rounded-lg shadow-md ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className='w-full '>
              <Image src={two} alt="recruitment" />
            </div>
            <div className='px-2'>
              <h2 className="text-3xl font-extrabold  text-customeprimary  mb-4">Join Our Team Today!</h2>
              <p className="text-sm text-black leading-6">
                HD Translation and Localization is one of the fastest-growing translation companies in the UK, and we are always looking to recruit top talent into our expansive network. Join our team of over 5,000 skilled translators and receive regular work from global clients and big international brands. Our outstanding reputation is built on our high-quality translation services. Therefore, our professional translators must pass stringent skill evaluation procedures to be accepted into our global network. This ensures we can maintain the same customer-centric approach and consistent results as our network continues to grow and lead the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-20 ">
    <h2 className="text-2xl font-extrabold text-customeprimary text-center mb-4">Freelance Job Opportunities</h2>
    <p className='max-w-4xl text-black text-center text-sm mx-auto'>Anyone looking to become part of our company can discover more about our job opportunities below. Before applying for any role, please review our website thoroughly to familiarise yourself with the services and areas of expertise our company offers.</p>
   <p className="mt-5 mx-auto text-center max-w-4xl text-sm">
   If you have any of the following skills, please apply:
   </p>
   <div className="mt-5 flex justify-center gap-3">
   <Link href={'/translation-services'} type="button"
    className="px-10 py-3 min-w-[140px] shadow-md shadow-gray-700 text-sm tracking-wider font-medium outline-none bg-customeprimary text-white active:shadow-inner">
      Translation Services</Link>
    <Link href={'/transcription-services'} type="button"
    className="px-10 py-3 min-w-[140px] shadow-md shadow-gray-700 text-sm tracking-wider font-medium outline-none bg-customeprimary text-white active:shadow-inner">
      Transcription Services</Link>
 
   </div>
    </div>
    </div>
  );
}

export default Page;
