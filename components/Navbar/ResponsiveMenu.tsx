import React, { useState } from "react";
import { FaUserCircle, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

interface MenuItem {
  title: string;
  link: string;
  subItems?: MenuItem[];
}

interface ResponsiveMenuProps {
  showMenu: boolean;
  onClose: () => void; // Callback function for closing the menu
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ showMenu, onClose }) => {
  const [activeMenu, setActiveMenu] = useState("");

  const menuItems: MenuItem[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Services",
      link: "/services",
      subItems: [
        { title: "Translation Services", link: "/translation-services" },
        { title: "Transcription Services", link: "/transcription-services" },
        { title: "Subtitling/Localization/Voiceovering", link: "#" },
      ],
    },
    {
      title: "Languages",
      link: "/languages",
      subItems: [
        { title: "Languages", link: "/languages" },
        { title: "History Of Languages", link: "/history-of-languages" },
      ],
    },
    {
      title: "About us",
      link: "/about-us",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
      subItems: [
        { title: "Contact Us", link: "/contact-us" },
        { title: "Recruitment", link: "/recruitment" },
      ],
    },
  ];

  const toggleSubMenu = (menuTitle: string) => {
    setActiveMenu(activeMenu === menuTitle ? "" : menuTitle);
  };

  const handleParentClick = (event: React.MouseEvent, menuTitle: string) => {
    event.preventDefault();
    toggleSubMenu(menuTitle);
  };

  return (
    <div className={`${showMenu ? "block" : "hidden"} fixed inset-0 z-[1000] bg-gray-800 bg-opacity-50 transition-opacity duration-500 ease-in-out`}>
      <div className={`fixed inset-y-0 left-0 z-50 w-3/4 bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${showMenu ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="px-8 py-4 flex justify-end">
          <button onClick={onClose} className="p-2 rounded-full bg-customeprimary text-sm">
            <FaTimes className="text-white" size={18} />
          </button>
        </div>
        <nav className="px-2 py-2">
          <ul className="space-y-4 ">
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <a href="#" className="mb-2 inline-block " onClick={(e) => handleParentClick(e, menuItem.title)}>
                  {menuItem.title}
                </a>
                {menuItem.subItems && menuItem.title === activeMenu && (
                  <ul className=" border-b-[6px] space-y-2 max-w-fit shadow-md border-b-customeprimary rounded-lg p-2">
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.link}>{subItem.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link href={'/get-a-quote'}>
            <Button onClick={onClose} className="bg-white border-customeprimary font-bold text-customeprimary border-2 w-full mt-5 p-4">Get a Quote</Button>
       </Link>
        </nav>
      </div>

    </div>
  );
};

export default ResponsiveMenu;
