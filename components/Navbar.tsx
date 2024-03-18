'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HoverCard from './HoverCard';

function Navbar() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const handleLinkMouseEnter = (link: string) => {
        setHoveredLink(link);
    };

    const handleLinkMouseLeave = () => {
        setHoveredLink(null);
    };

    return (
        <header className='py-4 px-4 text-sm sm:px-10 z-50 flex flex-col items-center justify-center min-h-[150px] sticky top-0'>
            <div className='relative flex flex-wrap mx-auto items-center'>
                <Link href="/">
                    <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                </Link>
                <div className='flex ml-auto lg:order-1'>
                    <button className='px-3 py-2 rounded-full text-white bg-[#53AFFA] transition-all ml-28 '>Get a quote</button>
                    <button id="toggle" className='lg:hidden ml-7'>
                        <svg className="w-5 h-5" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <ul id="collapseMenu" className='lg:!flex lg:space-x-3 max-lg:space-y-3 max-lg:hidden max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[250px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-lg:z-50'>
                    <li className='max-lg:border-b max-lg:py-2 px-3'>
                        <Link 
                            href="/" 
                            onMouseEnter={() => handleLinkMouseEnter('Home')} 
                            onMouseLeave={handleLinkMouseLeave} 
                            className='cursor-pointer lg:hover:text-blue-600 block transition-all'
                        >
                            Home
                        </Link>
                    </li>
                    <li className='reltive max-lg:border-b max-lg:py-2 px-3'>
                        <div 
                            onMouseEnter={() => handleLinkMouseEnter('Services')} 
                            onMouseLeave={handleLinkMouseLeave} 
                            className=' lg:hover:text-blue-600 block transition-all'
                        >
                            Services
                            {hoveredLink === 'Services' && (
                                <div className='absolute mt-5 top-0 left-[20%]'>
                                    <HoverCard 
                                        titles={["Translation Services", "Transcription Services"]} 
                                        onMouseEnter={() => handleLinkMouseEnter('Services')} 
                                        onMouseLeave={handleLinkMouseLeave} 
                                    />
                                </div>
                            )}
                        </div>
                    </li>
                    <li className='max-lg:border-b max-lg:py-2 px-3'>
                        <Link 
                            href="/languages" 
                            onMouseEnter={() => handleLinkMouseEnter('Languages')} 
                            onMouseLeave={handleLinkMouseLeave} 
                            className='cursor-pointer lg:hover:text-blue-600 block transition-all'
                        >
                            Languages
                            {hoveredLink === 'Languages' && (
                                <div className='absolute mt-5 top-0 left-[35%]'>
                                    <HoverCard 
                                        titles={["Languages", "History Of Languages"]} 
                                        onMouseEnter={() => handleLinkMouseEnter('Languages')} 
                                        onMouseLeave={handleLinkMouseLeave} 
                                    />
                                </div>
                            )}
                        </Link>
                    </li>
                    <li className='max-lg:border-b max-lg:py-2 px-3'>
                        <Link 
                            href="/about" 
                            onMouseEnter={() => handleLinkMouseEnter('About')} 
                            onMouseLeave={handleLinkMouseLeave} 
                            className='cursor-pointer lg:hover:text-blue-600 block transition-all'
                        >
                            About Us
                        </Link>
                    </li>
                    <li className='max-lg:border-b max-lg:py-2 px-3'>
                        <Link 
                            href="/contact" 
                            onMouseEnter={() => handleLinkMouseEnter('Contact')} 
                            onMouseLeave={handleLinkMouseLeave} 
                            className='cursor-pointer lg:hover:text-blue-600 block transition-all'
                        >
                            Contact Us
                            {hoveredLink === 'Contact' && (
                                <div className='absolute mt-5 top-0 left-[60%]'>
                                    <HoverCard 
                                        titles={["Contact Us", "Recruitment"]} 
                                        onMouseEnter={() => handleLinkMouseEnter('Contact')} 
                                        onMouseLeave={handleLinkMouseLeave} 
                                    />
                                </div>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
