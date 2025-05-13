import { companyLogos } from "../constants";
import { translations } from "../constants/translation"; // Import translations

const CompanyLogos = ({ className, language }) => {
  const t = translations[language]; // Get translations based on the selected language

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        {t.companyLogosTagline} {/* Dynamically set the tagline */}
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;