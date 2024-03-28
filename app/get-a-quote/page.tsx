'use client'
import React, { useState } from 'react';
import { InputField } from '@/components/Input';
import { SelectField } from '@/components/SelectField';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    sourceLanguage: '',
    targetLanguage: '',
    volumeOfContent: '',
    subjectMatter: '',
    additionalProjectDetails: '',
    fileFormat: '',
    preferredFileFormat: '',
    additionalServices: '',
    budget: '',
    paymentMethod: '',
    date:new Date()
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const setDate = (date: Date | null) => {
    if (date !== null) {
      setFormValues((prevValues) => ({
        ...prevValues,
        date: date, // Store the Date object
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when the form is submitted
   
    try {
       const response = await fetch("/api/send-email", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formValues),
       });
   
       if (response.ok) {
         alert("Email sent successfully!");
         setFormValues({
           fullName: '',
           email: '',
           phone: '',
           company: '',
           projectType: '',
           sourceLanguage: '',
           targetLanguage: '',
           volumeOfContent: '',
           subjectMatter: '',
           additionalProjectDetails: '',
           fileFormat: '',
           preferredFileFormat: '',
           additionalServices: '',
           budget: '',
           paymentMethod: '',
           date: new Date(),
         });
       } else {
         throw new Error("Failed to send email.");
       }
    } catch (error) {
       console.error("Error sending email:", error);
       alert("Failed to send email. Please try again later.");
    } finally {
       setIsLoading(false); // Set loading to false when the submission is complete
    }
   };


  return (
    <div className='mt-10'> 
      <h1 className="text-center text-3xl font-extrabold text-customeprimary">Get a Quote</h1>
      <p className="text-center text-lg mt-2 font-semibold text-customeprimary">Client Information</p>
      <div className="flex items-center justify-center p-6">
        <div className="mx-auto w-full max-w-4xl">
          <form onSubmit={handleSubmit} >
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
              <InputField id="fName" placeholder="Full Name" name="fullName" value={formValues.fullName} onChange={handleChange} />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField  id="email" placeholder="Email" name="email" value={formValues.email} onChange={handleChange} />
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField
                 value={formValues.phone}
                 onChange={handleChange}
                  id="phone"
                  placeholder="Your Phone Number"
                  name="phone"
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField 
                value={formValues.company}
                onChange={handleChange}
                id="company" placeholder="Company" name="company" />
              </div>
            </div>
      <h1 className="text-center my-5 text-xl font-bold text-customeprimary">Project Details</h1>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <SelectField
                  value={formValues.projectType}
                  name='projectType'
                  onChange={handleChange}
                  id="project type"
                  options={[
                    { value: 'Select Project Type!', label: 'Select Project Type!' },
                    { value: 'Document Translation', label: 'Document Translation' },
                    { value: 'Website Localization', label: 'Website Localization' },
                    { value: 'Software Localization', label: 'Software Localization' },
                    { value: 'Legal Documents', label: 'Legal Documents' },
                    { value: 'Medical Documents', label: 'Medical Documents' },
                    { value: 'Marketing Materials', label: 'Marketing Materials' },
                    { value: 'Transcription', label: 'Transcription' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <InputField  
                  value={formValues.sourceLanguage}
                  onChange={handleChange}
                id="source language" placeholder="Source Language" name="sourceLanguage" />
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField 
                  value={formValues.targetLanguage}
                  onChange={handleChange}
                id="target language" placeholder="Target Language(s)" name="targetLanguage" />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <SelectField
                value={formValues.volumeOfContent}
                onChange={handleChange}
                  id="volumofcontent"
                  name='volumeOfContent'
                  options={[
                    { value: 'Select Volume Of Content!', label: 'Select Volume Of Content!' },
                    { value: 'Word Count', label: 'Word Count' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </div>
            </div>
             <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <SelectField
                  name="subjectMatter"
                value={formValues.subjectMatter}
                onChange={handleChange}
                  id="subject matter"
                  options={[
                    { value: 'Select Subject Matter!', label: 'Select Subject Matter!' },
                    { value: 'General', label: 'General' },
                    { value: 'Legal', label: 'Legal' },
                    { value: 'Medical/Pharmaceutical', label: 'Medical/Pharmaceutical' },
                    { value: 'Technical/Engineering', label: 'Technical/Engineering' },
                    { value: 'Business/Marketing', label: 'Business/Marketing' },
                    { value: 'Creative Arts/Entertainment', label: 'Creative Arts/Entertainment' },
                    { value: 'IT/Software', label: 'IT/Software' },
                    { value: 'Financial/Economic', label: 'Financial/Economic' },
                    { value: 'Turism/Hospitality', label: 'Turism/Hospitality' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </div>               
            <div className="relative max-w-sm">       
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[430px] ml-3 justify-start text-left font-normal",
                      !formValues.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formValues.date ? format(formValues.date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formValues.date ? new Date(formValues.date) : undefined} // Convert timestamp back to Date object for selection
                    onSelect={(date: Date | undefined) => setDate(date || null)} // Convert undefined to null
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              </div>
            </div>
            <div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField 
                value={formValues.additionalProjectDetails}
                onChange={handleChange}
                id="Additional Project Details" placeholder="Additional Project Details(s)" name="additionalProjectDetails" />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <SelectField
                  name="fileFormat"
                value={formValues.fileFormat}
                onChange={handleChange}
                  id="fileformat"
                  options={[
                    { value: 'Select File format of source Content!', label: 'Select File format of source Content!' },
                    { value: 'Microsoft Word', label: 'Microsoft Word' },
                    { value: 'PDF', label: 'PDF' },
                    { value: 'Excel', label: 'Excel' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </div>
            </div>
            <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
                <SelectField
                value={formValues.preferredFileFormat}
                onChange={handleChange}
                  id="prefered fileformat"
                  name="preferredFileFormat"
                  options={[
                    { value: 'Prefered File Format for Delivery!', label: 'Prefered File Format for Delivery!' },
                    { value: 'Microsoft Word', label: 'Microsoft Word' },
                    { value: 'PDF', label: 'PDF' },
                    { value: 'Excel', label: 'Excel' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <SelectField
                value={formValues.additionalServices}
                onChange={handleChange}
                  id="addtional services"
                  name="additionalServices"
                  options={[
                    { value: 'Select Additional Servieces!', label: 'Select Additional Servieces!' },
                    { value: 'Proofreading', label: 'Proofreading' },
                    { value: 'Editing', label: 'Editing' },
                    { value: 'Formating/Layout', label: 'Formating/Layout' },
                    { value: 'Notarization', label: 'Notarization' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </div>
            </div>
      <h1 className="text-center my-5 flex-1 w-full text-xl font-bold text-customeprimary">Budget and Payment</h1>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <InputField 
                value={formValues.budget}
                onChange={handleChange}
                id="Budget" placeholder="Budget(if known)" name="budget" />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <SelectField
                value={formValues.paymentMethod}
                onChange={handleChange}
                  id="payment method"
                  name="paymentMethod"
                  options={[
                    { value: 'Payment Method', label: 'Payment' },
                    { value: 'Bank Transfer', label: 'Bank Transfer' },
                    { value: 'Wise', label: 'Wise' },
                    { value: 'Payoneer', label: 'Payoneer' },
                    { value: 'PayPal', label: 'PayPal' },
                    { value: 'Debit Card', label: 'Debit Card' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </div>
            </div>
            <button
              type='submit'
              className="hover:shadow-form rounded-md bg-customeprimary text-center py-3 px-8 text-base font-semibold text-white outline-none"
              disabled={isLoading} // Disable the button while loading
              >
              {isLoading ? 'Sending...' : 'Get A Quote'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
