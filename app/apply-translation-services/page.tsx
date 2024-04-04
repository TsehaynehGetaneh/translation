'use client'

import { InputField } from '@/components/Input'
import { SelectField } from '@/components/SelectField'
import { useState, ChangeEvent, FormEvent } from 'react'
import { toast } from 'react-toastify';

interface FormData {
  [key: string]: string | File | null;
  fullname: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  nativeLanguage: string;
  sourceLanguage: string;
  targetLanguage: string;
  specialization: string;
  experience: string;
  education: string;
  fieldOfStudy: string;
  highestEducationLevel: string;
  institution: string;
  cv: File | null;
 }

function Page() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    nativeLanguage: '',
    sourceLanguage: '',
    targetLanguage: '',
    specialization: '',
    experience: '',
    education: '',
    fieldOfStudy: '',
    highestEducationLevel: '',
    institution: '',
    cv: null
  });

const [message, setMessage] = useState<string>('');

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
        company: '',
        address: '',
        nativeLanguage: '',
        sourceLanguage: '',
        targetLanguage: '',
        specialization: '',
        experience: '',
        education: '',
        fieldOfStudy: '',
        highestEducationLevel: '',
        institution: '',
        cv: null
      });
      // Set success message
      setMessage('Email sent successfully!');
      toast.success('Email sent successfully!');
    } else {
      // Set error message
      setMessage('Error sending email. Please try again.');
      toast.error('Error sending email. Please try again.');
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      setMessage('Error sending email: ' + error.message);
      toast.error('Error sending email: ' + error.message);
    } else {
      setMessage('An unknown error occurred.');
      toast.error('An unknown error occurred.');
    }
  } finally {
    setIsSending(false); // Stop the sending animation
  }
};

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = event.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };


  return (
    <div className='w-full mt-20 bg-gradient-to-r from-[#FEFEFE] to-[#FAFAFB]'>
      <form onSubmit={handleSubmit} className='md:max-w-4xl sm:max-w-lg max-w-xl  mx-auto '>
        <h1 className="text-3xl font-bold text-center mb-5 text-customeprimary">Translation Application Form</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-4">
          <InputField onChange={handleChange} value={formData.fullname} id='fullname' name='fullname' placeholder='Full Name' />
          <InputField onChange={handleChange} value={formData.email} id='email' name='email' placeholder='Email Address' />
          <InputField onChange={handleChange} value={formData.phone} id='phone' name='phone' placeholder='Your Phone' />
          <InputField onChange={handleChange} value={formData.company} id='Company' name='company' placeholder='Company' />
          <InputField onChange={handleChange} value={formData.address} id='address' name='address' placeholder='Address' />
          <InputField onChange={handleChange} value={formData.nativeLanguage} id='native language' name='nativeLanguage' placeholder='Native Language' />
          <InputField onChange={handleChange} value={formData.sourceLanguage} id='source Language' name='sourceLanguage' placeholder='Source Language(s)' />
          <InputField onChange={handleChange} value={formData.targetLanguage} id='target Language' name='targetLanguage' placeholder='Target Language(s)' />
          <SelectField onChange={handleChange} value={formData.specialization} name='specialization' id='specialization' options={[
            { value: "Specialization", label: "Specialization" },
            { value: "General", label: "General" },
            { value: "Legal", label: "Legal" },
            { value: "Medical/Pharmaceutical", label: "Medical/Pharmaceutical" },
            { value: "Technical/Engineering", label: "Technical/Engineering" },
            { value: "Business/Marketing", label: "Business/Marketing" },
            { value: "Creative Arts/Entertainment", label: "Creative Arts/Entertainment" },
            { value: "IT/Software", label: "IT/Software" },
            { value: "Financial/Economic", label: "Financial/Economic" },
            { value: "Tourism/Hospitality", label: "Tourism/Hospitality" },
            { value: "Other", label: "Other" },
          ]} />
          <InputField onChange={handleChange} value={formData.experience} id='experience' name='experience' placeholder='Years Of Translation Experience' />
          <SelectField onChange={handleChange} value={formData.education} name='education' id='education' options={[
            { value: "CAT Tools Proficience", label: "CAT Tools Proficience" },
            { value: "SDL Trados", label: "SDL Trados" },
            { value: "MemoQ", label: "MemoQ" },
            { value: "Wordfast", label: "Wordfast" },
            { value: "Other", label: "Other" }
          ]} />
          <InputField onChange={handleChange} value={formData.fieldOfStudy} id='field of study' name='fieldOfStudy' placeholder='Field Of Study ' />
          <SelectField onChange={handleChange} value={formData.highestEducationLevel} name='highestEducationLevel' id='education' options={[
            { value: "Highest Education Level", label: "Highest Education Level" },
            { value: "Bachelors Degree", label: "Bachelors Degree" },
            { value: "Masters Degree", label: "Masters Degree" },
            { value: "PhD", label: "PhD" },
            { value: "other", label: "other" }
          ]} />
          <InputField onChange={handleChange} value={formData.institution} id='institution' name='institution' placeholder='Institution' />
          <div className="w-full">
            <input
              type="file"
              name="cv"
              onChange={handleChange}
              className="relative w-full h-16 text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
            />
            <label className="absolute top-0 text-sm text-black mb-2 block">Your CV</label>
          </div>
        </div>
        <div className="mt-4 justify-self-center self-center md:col-span-2">
          <button type="submit" className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Apply
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page
