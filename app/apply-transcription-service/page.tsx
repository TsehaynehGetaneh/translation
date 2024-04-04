'use client'

import { InputField } from '@/components/Input'
import { SelectField } from '@/components/SelectField'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify';

function Pagge() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    nativeLanguage: '',
    sourceLanguage: '',
    experience: '',
    CountryOfOrigin: '',
    education: '',
    cv: null
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true); 
    try {
       const form = new FormData();
       for (const key in formData) {
         if (Object.prototype.hasOwnProperty.call(formData, key)) {
           const value = (formData as any)[key];
           if (value instanceof File) {
             form.append(key, value);
           } else {
             form.append(key, value);
           }
         }
       }
   
       const response = await fetch("/api/send-transcription", {
         method: 'POST',
         body: form
       });
   
       // Check if the response is successful
       if (response.ok) {
         // Reset form data
         setFormData({
          fullname: '',
          email: '',
          phone: '',
          address: '',
          nativeLanguage: '',
          sourceLanguage: '',
          experience: '',
          CountryOfOrigin: '',
          education: '',
          cv: null
         });
         // Set success message
         toast.success('Email sent successfully!');
       } else {
         // Set error message
         toast.error('Error sending email. Please try again.');
       }
     } catch (error) {
       console.log(error);
       if (error instanceof Error) {
         toast.error('Error sending email: ' + error.message);
       } else {
         toast.error('An unknown error occurred.');
       }
     } finally {
       setIsSending(false); // Stop the sending animation
     }
   };

  return (
    <div className='w-full mt-10'>
      <form onSubmit={handleSubmit} className='md:max-w-4xl sm:max-w-lg max-w-xl  mx-auto'>
        <h1 className="text-3xl font-bold text-center mb-5 text-customeprimary">Transcription Application Form</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField onChange={handleChange} value={formData.fullname} id='fullname' name='fullname' placeholder='Full Name'/>
            <InputField onChange={handleChange} value={formData.email} id='email' name='email' placeholder='Email Address'/>
            <InputField onChange={handleChange} value={formData.phone} id='phone' name='phone' placeholder='Your Phone'/>
            <InputField onChange={handleChange} value={formData.address} id='address' name='address' placeholder='Address'/>
            <InputField onChange={handleChange} value={formData.nativeLanguage} id='nativeLanguage' name='nativeLanguage' placeholder='Native Language'/>
            <InputField onChange={handleChange} value={formData.sourceLanguage} id='sourceLanguage' name='sourceLanguage' placeholder='Source Language(s)'/> 
            <InputField onChange={handleChange} value={formData.experience} id='experience' name='experience' placeholder='Years Of Transcription Experience'/>
            <InputField onChange={handleChange} value={formData.CountryOfOrigin} id='Country Of Origin' name='CountryOfOrigin' placeholder='Country Of Origin  '/>
            <SelectField onChange={handleChange} value={formData.education} name='education' id='education' options={[
                {value:"Highest Education Level",label:"Highest Education Level"},
                {value:"Bachelors Degree",label:"Bachelors Degree"},
                {value:"Masters Degree",label:"Masters Degree"},
                {value:"PhD",label:"PhD"},
                {value:"other",label:"other"}
            ]}/>
            <div className="relative w-full">
              <label className="absolute top-0  left-5 text-sm text-black mb-2 block">Your CV</label>
              <input 
                type="file"
                name="cv"
                onChange={handleFileChange}
                className="w-full h-16 text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
              />
            </div>
        </div>
        <div className="mt-4 text-center justify-self-center self-center md:col-span-2">
          <button type="submit" className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            {isSending?"Sending":"Apply"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Pagge;
