"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import banner from "@/public/images/banner.png";
import { Mail, MapPinned, PhoneCall } from "lucide-react";
import { InputField } from "@/components/Input";
import { toast } from "react-toastify";

function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Function to handle input changes
  const handleInputChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      if (response.ok) {
        // Handle success
        toast.success("Email sent successfully!");
      } else {
        // Handle error
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("An error occurred:");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full relative">
      <div className="font-sans text-[#F9F9F9] relative z-10">
        <div className="h-96 relative">
          <Image
            src={banner}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container max-w-6xl  px-6 -mt-48 md:px-12">
          <div className="container mx-auto md:px-6">
            <section className="mb-16 bg-white rounded-md shadow-lg flex flex-col md:flex-row items-stretch relative z-10">
              <div className="w-full md:w-1/2 md:pr-4">
                <div className="h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7939.177179827951!2d36.574383!3d5.772179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17a5ab00439fbca5%3A0xc5b9f4c7889c312b!2sHD%20translation%20%26%20localization!5e0!3m2!1sen!2set!4v1710446972351!5m2!1sen!2set"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-5 md:mt-2 pb-5 md:pl-4">
                <div className="flex ml-10 flex-col justify-center items-center md:items-start h-full">
                  <h1 className="text-xl mb-2 font-extrabold leading-none tracking-tight text-[#53AFFA] md:text-3xl">
                    Visit Our Office
                  </h1>
                  <div className="w-full md:w-9/12 xl:w-8/12 px-3 md:px-6">
                    <div className="mb-8">
                      <div className="flex items-center">
                        <MapPinned color="#53AFFA" />
                        <div className="ml-4">
                          <p className="font-bold text-[#343F62]">
                            Main Office Address
                          </p>
                          <p className="text-gray-900">
                            Arkisha Main Road,
                            <br /> Jinka, Ethiopia
                          </p>
                          <p className="text-gray-900">+1 234-567-89</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="flex items-center">
                        <PhoneCall color="#53AFFA" />
                        <div className="ml-4">
                          <p className="font-bold text-[#343F62]">Phone</p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            +251912772136
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            +1 234-567-89
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail color="#53AFFA" />
                      <div className="ml-4">
                        <p className="font-bold text-[#343F62]">Press</p>
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
            </section>
          </div>
        </div>
      </div>
      <div className="w-full px-3">
        <form
          onSubmit={handleSubmit}
          className="md:max-w-3xl sm:max-w-lg max-w-xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-center mb-5 text-customeprimary">
            Get In Touch
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              onChange={handleInputChange}
              value={formState.fullname}
              id="fullname"
              name="fullname"
              placeholder="Full Name"
            />
            <InputField
              onChange={handleInputChange}
              value={formState.email}
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <InputField
              onChange={handleInputChange}
              value={formState.phone}
              id="phone"
              name="phone"
              placeholder="Your Phone"
            />
            <InputField
              onChange={handleInputChange}
              value={formState.subject}
              id="subject"
              name="subject"
              placeholder="Subject"
            />
            <textarea
              id="message"
              rows={4}
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              className="block col-span-1 md:col-span-2 p-2.5 w-full text-sm text-gray-900 rounded-lg border border-blue-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="mt-4 justify-self-center text-center col-span-1 self-center md:col-span-2">
            <button
              type="submit"
              className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              {isLoading ? "Sending ...." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
