import { useState } from "react";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const App = () => {
  const [language, setLanguage] = useState("tr"); // Default language is English

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Update the language state
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* Pass the language change handler to Header */}
        <Header onLanguageChange={handleLanguageChange} />
        {/* Pass the selected language to all components */}
        <Hero language={language} />
        <Benefits language={language} />
        <AboutUs language={language} />
        <Contact language={language} />
        <Footer />
      </div>
    </>
  );
};

export default App;