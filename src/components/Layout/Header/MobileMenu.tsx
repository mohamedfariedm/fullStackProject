"use client";

import { useState } from "react";
import LanguageChanger from "../LanguageChanger";
import MenuItemsDesktop from "./MenuItemsDesktop";
import { IoMenu, IoClose } from "react-icons/io5"; // Import icons for menu toggle
import { useTranslation } from "react-i18next";

 function MobileMenu({ locale,socialIcons }: { locale: string,socialIcons:any }) {
  const { t } =  useTranslation("common");
  const [menuOpen, setMenuOpen] = useState(false); // State for the mobile menu


  return (
    <header className="fixed block z-50  md:hidden top-0 w-full bg-black bg-opacity-40 shadow-md">
      <div className="container mx-auto px-4 lg:px-24 flex items-center justify-between py-4">
        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Logo */}
        <div className="w-[118px] h-[56px] bg-[url('/assets/images/logo.svg')] bg-contain bg-no-repeat"></div>

      </div>

      {/* Mobile Menu (Shown when open) */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-black bg-opacity-90 p-4">
          <nav className="flex flex-col items-center gap-4">
            <MenuItemsDesktop t={t} locale={locale} />
          </nav>
          <div className="flex justify-center mt-4 gap-4">
            {socialIcons.map((icon:any, index:number) => (
              <a
                key={index}
                href={icon.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6"
              >
                <img src={icon.icon} alt={`Social Icon ${index + 1}`} />
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <LanguageChanger />
          </div>
        </div>
      )}
    </header>
  );
}

export default MobileMenu;
