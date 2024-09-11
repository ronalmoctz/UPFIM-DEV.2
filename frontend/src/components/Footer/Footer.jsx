import React from "react";
import Container from "../../ui/Container";
import Credits from "./Credits";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-600 p-5 dark:bg-slate-800 md:p-16">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Contáctanos
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2" />
                <p>123, Street Main</p>
              </li>
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2" />
                <p>ABC City, AC 12345</p>
              </li>
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaEnvelope className="mr-2" />
                <p>Email: adjad@gmail.com</p>
              </li>
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaPhone className="mr-2" />
                <p>Phone: (120) 456-7890</p>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Contáctanos
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2" />
                <p>123, Street Main</p>
              </li>
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2" />
                <p>ABC City, AC 12345</p>
              </li>
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaEnvelope className="mr-2" />
                <p>Email: adjad@gmail.com</p>
              </li>
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaPhone className="mr-2" />
                <p>Phone: (120) 456-7890</p>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Contáctanos
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2" />
                <p>123, Street Main</p>
              </li>
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2" />
                <p>ABC City, AC 12345</p>
              </li>
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaEnvelope className="mr-2" />
                <p>Email: adjad@gmail.com</p>
              </li>
              <li className="flex items-center hover:text-gray-50 transition-colors duration-300">
                <FaPhone className="mr-2" />
                <p>Phone: (120) 456-7890</p>
              </li>
            </ul>
          </div>
        </div>
        <Credits />
      </Container>
    </footer>
  );
};

export default Footer;
