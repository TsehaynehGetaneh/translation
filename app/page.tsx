import ImageTextLayout from "@/components/ImageText";
import StatisticsCard from "@/components/StaticsCard";
import { CheckIcon, CircleCheck, Facebook, FacebookIcon, Instagram, InstagramIcon, Link } from "lucide-react";
import three from '@/public/pexels-canva-studio-3153198.jpg'

export default function Home() {

  
  return (
    <>
      <div className="bg-[#f8f9ff] border font-[sans-serif] text-[#333] text-[15px]">
        <div className="relative">
          <div className="">
          <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
            <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
            <div className="min-h-[400px] ml-32 leading-9 tracking-tight   relative z-50 h-full mx-auto flex flex-col justify-center text-left text-white p-6">
                <h2 className="sm:text-4xl leading-tight   max-w-md text-6xl font-extrabold mb-6">Professional Translation
                    and localization Services</h2>
              <div className="flex justify-between max-w-3xl font-bold text-xl text-white">
            <div className="flex items-center">
               <CheckIcon/>
                <span>Native Translators</span>
            </div>
            <div className="flex items-center">
            <CheckIcon/>
                <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center">
               <CheckIcon/>
                <span>Guaranteed Quality</span>
            </div>
           </div>
            </div>
        
        </div>
            <hr className="my-12 border-gray-300" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
      <StatisticsCard number={1500} label="Completed Projects" />
      <StatisticsCard number={400} label="Satisfied Clients" />
      <StatisticsCard number={50} label="Available Languages" />
      <StatisticsCard number={400} label="Professional Translators" />
    </div>
          </div>
          <img src="https://readymadeui.com/bg-effect.svg" className="absolute inset-0 w-full h-full" />
        </div>
    
        <div className="">
          <div className="mt-32  mx-auto w-full">
            <div className="mb-32 max-w-7xl text-center mx-auto">
              <h2 className="md:text-4xl text-3xl font-extrabold mb-6 text-[#53AFFA]">Why Choose Us?</h2>
              <p className="mt-6 text-xl ">When you choose a translation company, you expect the best. Our professional 
              translators are adept at tailoring work to meet specific requirements through our comprehensive range of services, ensuring consistent & accurate results.</p>
            </div>
            
          </div>
    
         <div className="flex flex-col gap-5">
         <ImageTextLayout header='Accurate Translations in 50+ Languages'
        paragraph="At HD Translation Company, we exclusively collaborate with seasoned language translators boasting a minimum of five years of experience in delivering top-tier language translation services. Our translators are empowered with state-of-the-art translation technology, enhancing their proficiency and knowledge to guarantee precision and authenticity. With our expanding team of experts, we now provide an extensive array of language combinations, ensuring that you find the perfect solution for your translation needs."
        imagePosition='right'
        imageSrc={three}
        />

<ImageTextLayout header='Cost-effective Translation Services'
        paragraph="Traditional translations can be costly, but at our professional translation agency, we've found a cost-effective approach. Utilizing cutting-edge computer-assisted tools and translation memory software enhances the efficiency of our language translators, allowing us to maintain reasonable costs. Transparency is crucial to us, so we provide upfront quotes, detailing the cost of each project clearly. With various pricing structures tailored to different budgets, reach out today for a personalized quote."
        imagePosition='right'
        imageSrc={three}
        />

<ImageTextLayout header='Stringent Quality Control Process'
        paragraph="At HD Translation Company, we implement the TEP method—comprising translation, editing, and proofreading—to ensure unparalleled quality control. This globally recognized process guarantees the accuracy, clarity, and error-free nature of our final translations. Centered around our clients, we instill a culture of diligence across our entire team, from project managers to professional translators."
        imagePosition='right'
        imageSrc={three}
        />

<ImageTextLayout header='A Diverse Team Of Expert Linguists'
        paragraph="At HD Translation Company, we boast a vast network of over 50 language translators, enabling us to provide comprehensive language solutions globally. Our extensive reach encompasses the translation of hundreds of languages, along with specialized services such as website translations, technical translations, voiceovers, and desktop publishing. To ensure consistent excellence, our linguists undergo a rigorous evaluation and vetting process before joining our team. Each translator possesses a minimum of five years of experience, holds a relevant degree, and successfully passes our demanding proficiency test. Additionally, many are affiliated with prestigious professional translation associations like ITI, ATA, CIOL, among others."
        imagePosition='right'
        imageSrc={three}
        />

<ImageTextLayout header='Ability to Meet Tight Deadlines'
        paragraph="In the realm of business, the pursuit of speed often compromises excellence, but not at HD Translation Company. We prioritize content quality and customer care without sacrificing swift turnarounds. Our language translators consistently deliver high-quality work on time, no matter the project's complexity. Within just one hour of your inquiry, you'll receive a detailed quote. Upon acceptance, we promptly schedule the delivery date for our translation services. Leveraging our extensive network of professional translators, we excel in accommodating tight deadlines, ensuring you achieve your goals without compromising quality."
        imagePosition='right'
        imageSrc={three}
        />

<ImageTextLayout header='Professional Indemnity Insurance Coverage'
        paragraph="As a leading language translation services provider, HD Translation Company is committed to delivering consistently flawless results. To ensure the utmost security for our clients, we provide full professional indemnity insurance, following the recommendations of the Association of Translation Companies. This comprehensive coverage offers financial and legal protection in the unlikely event of any issues arising from your translation project."
        imagePosition='right'
        imageSrc={three}
        />
         </div>
    

    
        </div>
    
        <footer className="bg-[#0B60B0] px-4 mx-auto sm:px-10 py-12 mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white border-b-2 pb-1 font-extrabold text-xl mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">Arkisha Main Road,</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">Telephone: +251912772136</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">WhatsApp: +251912772136</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">Email: info@hdtranslation.com</a>
                </li>
                <div className="flex space-x-5">
                  <Link href="https://www.facebook.com/">
                  <FacebookIcon />
                  </Link>
                  <Link href="https://www.linkedin.com/">
                  <InstagramIcon />
                  </Link>
                </div>
              </ul>
            </div>
            <div>
              <h4 className="text-white border-b-2 pb-1 font-extrabold text-xl mb-6">Useful Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">Get a Quote</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">About Us</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">Recruitment</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white border-b-2 pb-1 font-extrabold text-xl mb-6">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">Confidentiality</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">Terms & Conditions of Business</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">Data Protection & Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white border-b-2 pb-1 font-extrabold text-xl mb-6">Policies</h4>
              <ul className="space-y-4">
                <li>
                  <a href="javascript:void(0)" className="hover:text-white text-gray-300 transition-all">Website Terms Of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t text-center border-gray-400 pt-8 mt-8">
            <p className="text-gray-300">
              Copyright © 2023
              <a href="https://readymadeui.com/" target="_blank" className="hover:underline mx-1">ReadymadeUI</a>
              All Rights Reserved.
            </p>
          </div>
        </footer>
    
      </div>
  </>
  );
}
