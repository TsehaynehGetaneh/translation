import { Mail, MapPinned, PhoneCall } from 'lucide-react'
import React from 'react'

function contactus() {
  return (
    <>
    <div>
<div className="container  mx-auto ">
  <section className="mb-32">
    <div
      className="relative h-[300px] w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]">
    </div>
    <div className="container px-6 md:px-12">
     <div className="container my-24 mx-auto md:px-6">
     <section className="mb-32 flex items-stretch">
  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex-grow">
    <div className="flex flex-wrap items-stretch h-full">
      <div className="block  w-1/2 h-full">
        <div className="h-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7939.177179827951!2d36.574383!3d5.772179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17a5ab00439fbca5%3A0xc5b9f4c7889c312b!2sHD%20translation%20%26%20localization!5e0!3m2!1sen!2set!4v1710446972351!5m2!1sen!2set" 
          width="600" height="450" 
          style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className=" w-1/2 h-full">
        <div className="flex flex-wrap justify-center items-center flex-col h-full px-3  md:pb-0 lg:pt-0">
        <h1 className="flex-1 text-center text-lg font-extrabold leading-none tracking-tight text-[#53AFFA] md:text-2xl dark:text-white">Visit Our Office</h1>
                    <div className="mb-12 w-full px-3  md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
            <div className="flex  h-full">
              <MapPinned color='#53AFFA' />
              <div className="ml-6 grow ">
                <p className="mb-2 font-bold dark:text-white">
                  Main Office Address
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  Arkisha Main Road,<br/> Jinka, Ethiopia
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
                    <div className="mb-12 w-full px-3  md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
            <div className="flex h-full">
              <PhoneCall color='#53AFFA' />
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">               
                  Phone
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +251912772136
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full px-3  md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
            <div className="align-start flex h-full">
              <div className="shrink-0">
                <Mail color='#53AFFA' />
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-white">Press</p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  E-mail
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  info@hdtranslation.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
    </div>
  </section>
</div>
    </div>

    <div className="mx-auto max-w-[700px]">
          <form className=''>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#53AFFA] text-center dark:text-white">Get in touch</h1>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
           </div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            <button type="button" className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  mt-3 rounded-full text-sm px-5 py-4 font-semibold me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
          </form>
        </div>
    </>
  )
}

export default contactus