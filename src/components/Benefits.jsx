import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { translations } from "../constants/turkish"; // Import translations

const Benefits = ({ language }) => {
  const t = translations[language];
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={t.benefitsTitle} // Dynamically set the title
        />
        <p className="text-center text-xl font-medium max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          {t.benefitsEntrance} {/* Dynamically set the entrance */}
        </p>
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col justify-center items-center min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 text-center">{item.title[language]}</h5> {/* Use language-specific title */}
                <p className="body-10 mb-6 text-n-3">{item.text[language]}</p> {/* Use language-specific text */}
                <div className="flex items-center mt-auto"></div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset--10 opacity-0 transition-opacity hover:opacity-20">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title[language]} // Use language-specific alt text
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;