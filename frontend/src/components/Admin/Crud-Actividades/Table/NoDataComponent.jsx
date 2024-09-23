import React from "react";
import { motion } from "framer-motion";

const NoDataComponent = ({ imageSrc }) => (
  <div className="flex justify-center">
    <motion.img
      src={imageSrc}
      alt="No data available"
      className="w-80 h-80"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  </div>
);

export default NoDataComponent;
