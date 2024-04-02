"use client"
import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from '@/public/logo.jpg'
const Navbar = () => {
 
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="fixed top-0 bg-white z-[999]   w-full text-sm text-black "
      >
        <nav className=" flex h-[100px] whitespace-nowrap w-[80%] mx-auto items-center justify-between md:justify-center py-2 ">
          {/* Desktop Menu */}
          <Link href={'/'} className="cursor-pointer mr-10"> 
              <Image src={Logo.src} alt="logo" width={120} className="relative mb-3" height={120}/>
              <span className="text-xs text-green-500 font-bold pl-1  absolute top-20">Bridge the Gap</span>
            </Link>
          <div className="hidden md:flex items-center justify-center">
            <ul className="flex items-center gap-5">
          <li className="cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className="group relative cursor-pointer">
                <Link
                  href="/"
                  className="flex h-[35px] items-center gap-[2px]"
                >
                  Services{" "}
                </Link>
                <div className="absolute -left-7  ease-in-out transition-all duration-700 transform scale-95 shadow-lg border-b-[6px] border-b-customeprimary rounded-lg z-[9999] hidden w-[170px] bg-white py-2 text-black group-hover:block  ">
                  <ul className="space-y-1">
                    <li className="px-4 py-1 hover:bg-customeprimary hover:text-white">
                    <Link href="/translation-services" >Translation Services </Link>
                    </li>
                    <li className="px-4 py-1 hover:bg-customeprimary hover:text-white">
                    <Link href="/transcription-services" >  Transcription Services </Link>
                    </li>
                    <li className="px-4 py-1 hover:bg-customeprimary hover:text-white">
                    <Link href="#" >  Subtitling</Link>
                    </li> <li className="px-4 py-1 hover:bg-customeprimary hover:text-white">
                    <Link href="#" >  Localization </Link>
                    </li> <li className="px-4 py-1 hover:bg-customeprimary hover:text-white">
                    <Link href="#" >  Voiceovering </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="group relative cursor-pointer">
                <a
                  href="/"
                  className="flex h-[35px] items-center gap-[2px]"
                >
                  Languages{" "}
                </a>
                <div className="absolute -left-7 border-b-[6px] border-b-customeprimary rounded-lg md:w-[170px] z-[9999] hidden w-[150px] bg-white py-2 text-black group-hover:block  ">
                  <ul className="space-y-1 ">
                    <li className="py-1 px-4 hover:bg-customeprimary hover:text-white">
                    <Link href="/languages" > Languages</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-customeprimary hover:text-white">
                    <Link href="/history-of-languages" > History Of Languages </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="cursor pointer">
                <Link href="/about-us">About us</Link>
              </li>
              <li className="group relative cursor-pointer">
                <a
                  href="/"
                  className="flex h-[35px] items-center gap-[2px]"
                >
                                Contact Us{" "}
                </a>
                <div className="absolute -left-9 z-[9999] border-b-[6px] border-b-customeprimary rounded-lg hidden w-[160px] bg-white py-2 text-black group-hover:block  ">
                  <ul className="space-y-1">
                    <li className="py-1 px-4 hover:bg-customeprimary hover:text-white">
                    <Link href="/contact-us" > Contact Us</Link>
                    </li>
                    <li className="py-1 px-4 hover:bg-customeprimary hover:text-white">
                    <Link href="/recruitment" >Recruitment</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <Link href={'/get-a-quote'}>
            <Button  size={'sm'} className="bg-customeprimary ml-20 inline cursor-pointer justify-self-end rounded-full  px-3">Get a quote</Button>
            </Link>

          </div>

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Navbar;