import React from "react";
import Container from "../../UI/Container";
import Credits from "./Credits";
import {
  FaUserAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-600 p-5 dark:bg-slate-800 md:p-16  ">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between ">
          <div className="flex-1 flex flex-col items-center text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Cultura & Deporte
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex hover:text-gray-50 transition-colors duration-300">
                <FaUserAlt className="mr-2" />
                <p>Lic.Diana Lizeth Juárez Cano</p>
              </li>
              <li className="flex hover:text-gray-50 transition-colors duration-300">
                <FaEnvelope className="mr-2" />
                <p>cultura-deportes@upfim.edu.mx</p>
              </li>
              <li className="flex hover:text-gray-50 transition-colors duration-300">
                <FaPhone className="mr-2" />
                <p>738 724 1174</p>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col items-center text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-200">UPFIM</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex hover:text-gray-50 transition-colors duration-300">
                <FaMapMarkerAlt className="mr-2" />
                <p>Tepatepec, Francisco I. Madero</p>
              </li>
              <li className="flex hover:text-gray-50 transition-colors duration-300">
                <FaPhone className="mr-2" />
                <p>738 724 1174</p>
              </li>
              <li className="flex hover:text-gray-50 transition-colors duration-300">
                <FaEnvelope className="mr-2" />
                <p>contacto@upfim.edu.mx</p>
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col items-center text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Contáctanos
            </h3>
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                >
                  <FaFacebookSquare size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition-colors duration-300"
                >
                  <AiFillInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                >
                  <FaYoutube size={24} />
                </a>
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
