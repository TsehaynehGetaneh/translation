import React from 'react';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import Link from 'next/link';
import footerImg from '@/public/images/footer.png'
import prozLogo from '@/public/icons8-proz-48.png'

function Footer() {
  return (
    <div className='w-full'>   
      <div className="w-full mx-auto">
        <Image src={footerImg} alt="footer" className="text-center w-full object-cover" />
      </div>
      <footer className="bg-[#0B60B0] px-4 mx-auto sm:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          <div className="text-center order-3 md:order-1 lg:text-left"> {/* Center text on small screens, left-align on large screens */}
            <h4 className="text-white border-b-2 pb-1 font-extrabold text-lg mb-6">Contact</h4>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                  Arkisha Main Road,
                </span>
              </li>
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                  Telephone: +251912772136
                </span>
              </li>
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                  WhatsApp: +251912772136
                </span>
              </li>
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                  Email: info@hdtranslation.com
                </span>
              </li>
              <div className="flex justify-center lg:justify-start space-x-5"> {/* Center icons on small screens, left-align on large screens */}
                <Link href="https://www.facebook.com/Islam.is.cod.of.life?mibextid=ZbWKwL">
                  <FaFacebook color='blue' size={25} />
                </Link>
                <Link href="https://www.linkedin.com/company/hd-translationservices/">
                  <TiSocialLinkedinCircular color='blue' size={30} />
                </Link>
                <Link href="https://www.proz.com/business/189428-hd-translation-localization">
                  <Image src={prozLogo} alt="logo" width={30} />
                </Link>
              </div>
            </ul>
          </div>
          <div className="text-center lg:text-left"> {/* Center text on small screens, left-align on large screens */}
            <h4 className="text-white border-b-2 pb-1 font-extrabold text-lg mb-6">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                  <Link href={'/get-a-quote'}> Get a Quote   </Link>
                </span>
              </li>
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                   <Link href={'/about-us'}>About Us </Link>
                </span>
              </li>
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                   <Link href={'/recruitment'}>Recruitment</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-left"> {/* Center text on small screens, left-align on large screens */}
            <h4 className="text-white border-b-2 pb-1 font-extrabold text-lg mb-6">Legal</h4>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                   <Link href={'/confidentiality'}>Confidentiality</Link>
                </span>
              </li>
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                  <Link href={'/term-and-conditions'}>Terms & Conditions of Business </Link>
                </span>
              </li>
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                  <Link href={'/data-protection'}>Data Protection & Privacy Policy  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-left"> {/* Center text on small screens, left-align on large screens */}
            <h4 className="text-white border-b-2 pb-1 font-extrabold text-lg mb-6">Policies</h4>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-white text-gray-300 transition-all">
                  <Link href={'/website-term-of-use'}>Website Terms Of Use </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
