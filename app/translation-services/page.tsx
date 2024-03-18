import ImageTextLayout from '@/components/ImageText'
import Star from '@/components/Star'
import { BadgeCheck, History, TimerReset } from 'lucide-react'
import React from 'react'
import three from '@/public/pexels-canva-studio-3153198.jpg'

function page() {
  return (
    <>
    {/* <div className="relative overflow-hidden">
    <div className="bg-gray-100 py-8 px-6 transform -skew-y-3 z-50 h-96 -translate-y-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">Professional Translation Services</h2>
      <p className="text-lg">
        At HD Translation and Localization, we provide quick, budget-friendly, and expert translation services for individuals and businesses. Our skilled translators bring extensive experience and deep knowledge across various content types. With our services, you can overcome language barriers and connect seamlessly with your global audience. Whether you need translations urgently or in the future, our dedicated team ensures reliable and precise services, whenever you need them.
      </p>
    </div>
  </div>
    <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4">
        <h3 className="text-3xl text-[#3B82F6] font-bold mb-2">Why Choose Us?</h3>
        <div className="max-w-xl mt-5 leading-8  tracking-wide text-lg">
            <p>
            HD Translation and Localization is your go-to translation agency. Our expert team will meet your specific requirements and can provide comprehensive language translation services, consistent results and reliable service.
            </p>
        </div>
    </div>
    </div>
    <div className="grid grid-cols-2 w-1/2" >
        <div className="flex gap-2">
            <Star/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-customeprimary">Excellent Quality</h1>
                <p className="max-w-48">
                Our well-vetted native translators will deliver professional translation services every time.
                </p>
            </div>
        </div>
        <div className="flex gap-2">
            <Star/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-customeprimary">Affordable Rates</h1>
                <p className="max-w-48">
                Our accurate translating services are offered at several price options to suit all budgets.
                </p>
            </div>
        </div>
        <div className="flex gap-2">
        <TimerReset color='#3B82F6' className='text-customeprimary size-14' />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-customeprimary">Quick Turnaround</h1>
                <p className="max-w-48">
                We use innovative tools to speed up our translation services and meet all turnarounds.
                </p>
            </div>
        </div>
        <div className="flex gap-2">
        <BadgeCheck color='#3B82F6' className='text-customeprimary size-14' />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-customeprimary">Insurance Coverage</h1>
                <p className="max-w-48">
                We provide our clients with broad protection through full professional indemnity insurance.
                </p>
            </div>
        </div>
    </div>
    </div> */}

    <ImageTextLayout header='Accurate Translations in 50+ Languages'
        paragraph="At HD Translation Company, we exclusively collaborate with seasoned language translators boasting a minimum of five years of experience in delivering top-tier language translation services. Our translators are empowered with state-of-the-art translation technology, enhancing their proficiency and knowledge to guarantee precision and authenticity. With our expanding team of experts, we now provide an extensive array of language combinations, ensuring that you find the perfect solution for your translation needs."
        imagePosition='right'
        imageSrc={three}
        />
    <div className="mt-5 bg-[#f8f9ff]">
  <div className="mx-auto max-w-6xl px-4 font-[sans-serif] text-[#333]">
    <div className="text-center">
      <h2 className="sm:text-3xl font-extrabold">Translation Technology</h2>
    </div>
    <div className="grid lg:grid-cols-3 justify-center items-center md:grid-cols-2 gap-x-12 gap-y-20 mt-16">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Translation Memory (TM)</h3>
        <p className="text-gray-500 text-sm">A translation memory (TM) is a database where our expert team stores segments of previously translated text. Our professional translators use this database to help find the right words quickly, improving accuracy, consistency, and efficiency in our language translation services.</p>
      </div>
      <div className="text-center">
        <h3 className="font-semibold mb-2">CAT Tools Software</h3>
        <p className="text-gray-500 text-sm">Computer-assisted translation tools (CAT) aid our human translators with their translation services. Using a variety of software, we pull words and phrases from the TM to guarantee consistent quality, alongside streamlining editing and storing procedures within our translation agency.</p>
      </div>
      <div className="text-center">
        <h3 className="font-semibold mb-2">Professional Project Management</h3>
        <p className="text-gray-500 text-sm">We rely on an advanced project management software to allow instant tracking and reporting of all ongoing and past projects. This helps us work to quick turnarounds and collaborate effortlessly between different teams to provide professional translation services.</p>
      </div>     
    </div>
  </div>
</div>

  </>
  )
}

export default page