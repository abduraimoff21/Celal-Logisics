import { curve } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import { translations } from "../constants/turkish"; // Import translations

const Hero = ({ language }) => {
  const parallaxRef = useRef(null);
  const t = translations[language]; // Get translations based on the selected language

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            {t.heroTitle}{" "}
            <br></br>
            <span className="inline-block relative">
              Celal Lojistik{" "}
              <img
                src={curve}
                className="absolute top-[125%] left-[1%] w-full xl:-mt-4"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {t.heroSubtitle}
          </p>
        </div>

        <BackgroundCircles />

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" language={language}/>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;