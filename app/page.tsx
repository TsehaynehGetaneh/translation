import ImageTextLayout from "@/components/ImageText";
import StatisticsCard from "@/components/StaticsCard";
import {
  CheckIcon,
  CircleCheck,
  Facebook,
  FacebookIcon,
  Instagram,
  InstagramIcon,
} from "lucide-react";
import three from "@/public/pexels-canva-studio-3153198.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import village from "@/public/images/home.jpg";
import statimage from "@/public/images/5.png";
import threepople from "@/public/images/threepeople.jpg";
import coasteffective from "@/public/images/coasteffective.png";
import discussion from "@/public/images/discussion.jpg";
import smile from "@/public/images/smile.jpg";
import time from "@/public/images/time.webp";
import agree from "@/public/images/agree.jpg";
export default function Home() {
  return (
    <>
      <div className="bg-white w-full">
        <div className="relative">
          <div className="">
            <div className="relative bg-[#7D7D7D] md:bg-white md:pl-12 pl-5">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Image */}
              <Image
                src={village}
                alt="Banner Image"
                className="md:absolute md:inset-0 md:w-full w-[90%] md:rounded-none mx-auto rounded-lg h-28 md:h-full object-cover filter brightness-[50%]"
              />

              {/* Content */}
              <div className="min-h-[400px] relative z-50 h-full mx-auto flex flex-col justify-center text-left text-white p-6">
                <h2 className="sm:text-4xl text-3xl leading-10 tracking-[0.01em] md:max-w-xl md:text-5xl font-bold mb-6">
                  Professional Translation and localization Services
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-between max-w-3xl font-bold text-xl text-white">
                  <div className="flex items-center">
                    <CircleCheck size={20} className="mr-3" />
                    <span className="tracking-wider text-lg">
                      Native Translators
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck size={20} className="mr-3" />
                    <span className="tracking-wider text-lg">
                      Transparent Pricing
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck size={20} className="mr-3" />
                    <span className="tracking-wider text-lg">
                      Guaranteed Quality
                    </span>
                  </div>
                </div>
                <Button
                  variant={"ghost"}
                  className="md:w-28 border-customeprimary -z-10 mt-10 font-semibold rounded-lg bg-white text-customeprimary px-5"
                >
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </div>
            </div>
            <hr className=" border-gray-300" />
            <div
              className="grid grid-cols-2 p-10 rounded-md md:grid-cols-4 gap-4 items-center"
              style={{
                backgroundImage: `url(${typeof statimage === "string" ? statimage : statimage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <StatisticsCard number={1500} label="Completed Projects" />
              <StatisticsCard number={400} label="Satisfied Clients" />
              <StatisticsCard number={50} label="Available Languages" />
              <StatisticsCard number={400} label="Professional Translators" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-10  mx-auto w-full">
            <div className="mb-32 max-w-7xl text-center mx-auto">
              <h2 className="md:text-4xl text-3xl font-bold mb-6 text-customeprimary">
                Why Choose Us?
              </h2>
              <p className="mt-6 max-w-6xl mx-auto text-center ">
                When you choose a translation company, you expect the best. Our
                professional translators are adept at tailoring work to meet
                specific requirements through our comprehensive range of
                services, ensuring consistent & accurate results.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <ImageTextLayout
              header="Accurate Translations in 50+ Languages"
              paragraph="At HD Translation Company, we exclusively collaborate with seasoned language translators boasting a minimum of five years of experience in delivering top-tier language translation services. Our translators are empowered with state-of-the-art translation technology, enhancing their proficiency and knowledge to guarantee precision and authenticity. With our expanding team of experts, we now provide an extensive array of language combinations, ensuring that you find the perfect solution for your translation needs."
              imagePosition="right"
              imageSrc={threepople}
            />

            <ImageTextLayout
              header="Cost-effective Translation Services"
              paragraph="Traditional translations can be costly, but at our professional translation agency, we've found a cost-effective approach. Utilizing cutting-edge computer-assisted tools and translation memory software enhances the efficiency of our language translators, allowing us to maintain reasonable costs. Transparency is crucial to us, so we provide upfront quotes, detailing the cost of each project clearly. With various pricing structures tailored to different budgets, reach out today for a personalized quote."
              imagePosition="left"
              imageSrc={coasteffective}
            />

            <ImageTextLayout
              header="Stringent Quality Control Process"
              paragraph="At HD Translation Company, we implement the TEP method—comprising translation, editing, and proofreading—to ensure unparalleled quality control. This globally recognized process guarantees the accuracy, clarity, and error-free nature of our final translations. Centered around our clients, we instill a culture of diligence across our entire team, from project managers to professional translators."
              imagePosition="right"
              imageSrc={discussion}
            />

            <ImageTextLayout
              header="A Diverse Team Of Expert Linguists"
              paragraph="At HD Translation Company, we boast a vast network of over 50 language translators, enabling us to provide comprehensive language solutions globally. Our extensive reach encompasses the translation of hundreds of languages, along with specialized services such as website translations, technical translations, voiceovers, and desktop publishing. To ensure consistent excellence, our linguists undergo a rigorous evaluation and vetting process before joining our team. Each translator possesses a minimum of five years of experience, holds a relevant degree, and successfully passes our demanding proficiency test. Additionally, many are affiliated with prestigious professional translation associations like ITI, ATA, CIOL, among others."
              imagePosition="left"
              imageSrc={smile}
            />

            <ImageTextLayout
              header="Ability to Meet Tight Deadlines"
              paragraph="In the realm of business, the pursuit of speed often compromises excellence, but not at HD Translation Company. We prioritize content quality and customer care without sacrificing swift turnarounds. Our language translators consistently deliver high-quality work on time, no matter the project's complexity. Within just one hour of your inquiry, you'll receive a detailed quote. Upon acceptance, we promptly schedule the delivery date for our translation services. Leveraging our extensive network of professional translators, we excel in accommodating tight deadlines, ensuring you achieve your goals without compromising quality."
              imagePosition="right"
              imageSrc={time}
            />

            <ImageTextLayout
              header="Professional Indemnity Insurance Coverage"
              paragraph="As a leading language translation services provider, HD Translation Company is committed to delivering consistently flawless results. To ensure the utmost security for our clients, we provide full professional indemnity insurance, following the recommendations of the Association of Translation Companies. This comprehensive coverage offers financial and legal protection in the unlikely event of any issues arising from your translation project."
              imagePosition="left"
              imageSrc={agree}
            />
          </div>
        </div>
      </div>
    </>
  );
}
