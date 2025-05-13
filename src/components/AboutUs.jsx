import Section from "./Section";
import Heading from "./Heading";
import { aboutImages } from "../constants";
import { translations } from "../constants/translation";

const AboutUs = ({ language }) => {
  const t = translations[language];

  return (
    <Section id="about-us" className="py-16">
      <div className="container">
        <Heading
          className="md:max-w-md lg:max-w-5xl"
          title={t.aboutUsTitle}
          text={t.aboutUsDescription}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 mt-10">
          {aboutImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                width={550}
                height={150}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;