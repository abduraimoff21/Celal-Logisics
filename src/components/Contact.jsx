import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { translations } from "../constants/turkish";

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({ name: "", number: "", email: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "" });

  const t = translations[language];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: t.sendingMessage, type: "info" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ message: t.messageSent, type: "success" });
        setFormData({ name: "", number: "", email: "", message: "" });
      } else {
        setStatus({ message: t.messageFailed, type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ message: t.errorOccurred, type: "error" });
    }
  };

  return (
    <Section id="contact" className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Contact Form */}
        <div>
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title={t.contactUs}
            text={t.contactText}
          />

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              name="name"
              placeholder={t.yourName}
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              name="number"
              placeholder={t.yourPhoneNumber}
              value={formData.number}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t.yourEmail}
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder={t.yourMessage}
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
            >
              {t.sendMessage}
            </button>
          </motion.form>

          {status.message && (
            <p
              className={`mt-4 text-center font-semibold ${
                status.type === "success"
                  ? "text-green-600"
                  : status.type === "error"
                  ? "text-red-600"
                  : "text-gray-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>

        {/* Right Side: Social Accounts and Map */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">{t.socialAccounts}</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                <a
                  href="https://www.facebook.com/share/1ABDddGfjR/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
                <a
                  href="https://www.instagram.com/celallogistic?igsh=MWMwaTdmeGhwN3JnaQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTelegram} className="text-blue-400" />
                <a
                  href="https://t.me/celallogistic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Telegram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faWhatsapp} className="text-blue-700" />
                <a
                  href="https://wa.me/905072412123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.location}</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9630579153169!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8c3e5e5e5e5!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1611810191234!5m2!1sen!2sau"
              width="100%"
              height="496"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;