import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { logo } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = ({ onLanguageChange }) => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [language, setLanguage] = useState("tr"); // Default language is Turkish
  // const [language, setLanguage]= useState("ru");

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleLanguageToggle = (lang) => {
    setLanguage(lang);
    onLanguageChange(lang); // Notify parent component about the language change
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-11 h-16">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={logo} width={150} height={40} alt="Celal Lojistik" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title[language]} {/* Dynamically set the title based on the selected language */}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {/* Language Toggle Buttons */}
        <div className="ml-auto flex gap-4">
          <button
            onClick={() => handleLanguageToggle("en")}
            className={`px-2 py-2 rounded-full transition-all ${
              language === "en"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-blue-200"
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageToggle("tr")}
            className={`px-2 py-2 rounded-full transition-all ${
              language === "tr"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Türkçe
          </button>
          <button
            onClick={() => handleLanguageToggle("tr")}
            className={`px-2 py-2 rounded-full transition-all ${
              language === "ru"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Русский
          </button>
        </div>

        <Button
          className="ml-4 lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;