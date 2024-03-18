import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';

type ImageTextLayoutProps = {
  imageSrc: string | StaticImageData;
  header: string;
  paragraph: string;
  imagePosition: 'left' | 'right';
}

const ImageTextLayout = ({ imageSrc, header, paragraph, imagePosition }: ImageTextLayoutProps) => {
  return (

    <section className="mb-32">
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <Image src={imageSrc} alt='image'
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-6 pb-2 text-4xl font-bold">
              {header}
            </h2>
            <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
             {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
//  <div className="bg-white">
//    <div className="">
//      <div className='flex '>
//       <div className='bg-[#F7F7F7]'>
//       <Image src={imageSrc} width={450}  alt={header} className='' />
//       </div>
//       <div className='bg-[#F7F7F7]'>
//       <div className=' ml-7 '>
//         <div className="ml-20">
//         <div className='my-12  text-center max-w-xl'>
//         <h1 className='text-2xl text-customeprimary mb-5 font-bold'>{header}</h1>
//         <p className='text-base '>{paragraph}</p>
//         </div>
//         </div>
//       </div>
//       </div>
//    </div>
//   </div>
//  </div>
  );
};

export default ImageTextLayout;
