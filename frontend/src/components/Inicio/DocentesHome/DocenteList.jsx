import React, { useEffect, useState } from "react";
import axios from "axios";
import DocenteCards from "./DocenteCards";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const DocenteList = () => {
  const [docentes, setDocentes] = useState([]); 
  const [startIndex, setStartIndex] = useState(0); 
  const reviewPerPage = 3; 

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getDocentes");
        setDocentes(response.data);
      } catch (error) {
        console.error("Error al obtener docentes:", error);
      }
    };
    fetchDocentes();
  }, []);

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - reviewPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + reviewPerPage, docentes.length - reviewPerPage)
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 lg:flex-row">
        {docentes
          .slice(startIndex, startIndex + reviewPerPage) 
          .map((docente, index) => (
            <DocenteCards docente={docente} key={index} />
          ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-6">
        <button
          className="rounded-full border-2 border-gray-400 px-4 py-2 disabled:opacity-40"
          onClick={handlePrevious}
          disabled={startIndex === 0} 
        >
          <FaArrowLeftLong />
        </button>
        <button
          className="rounded-full border-2 border-gray-400 px-4 py-2 disabled:opacity-40"
          onClick={handleNext}
          disabled={startIndex + reviewPerPage >= docentes.length} 
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};
export default DocenteList;
