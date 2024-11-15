import React from "react";
const Header = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
        {title}
      </h2>
      <p className="text-gray-600 mt-2 text-lg text-center mb-10">{subtitle}</p>
    </>
  );
};
export default Header;
