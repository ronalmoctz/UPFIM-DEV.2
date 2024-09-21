import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const AcordeonFunction = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        {accordionOpen ? (
          <MdExpandLess className="fill-verde shrink-0 ml-8" size={30} />
        ) : (
          <MdExpandMore className="fill-verde shrink-0 ml-8 text-bold" size={30} />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm dark:text-white ${
          accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default AcordeonFunction;
