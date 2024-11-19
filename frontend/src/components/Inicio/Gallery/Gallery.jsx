import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/getAllFeaturedImages")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar las imágenes:", error);
        setLoading(false);
      });
  }, []);

  const nextImage = () => {
    setDirection("right");
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection("left");
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-[480px] bg-gray-300 rounded-lg">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      <div className="relative group overflow-hidden">
        <div
          className={`h-[300px] md:h-[480px] w-full flex transition-transform duration-500 ${
            direction === "right"
              ? "translate-x-0"
              : direction === "left"
              ? "-translate-x-0"
              : ""
          }`}
          style={{ transform: `translateX(${-activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              className="h-[300px] md:h-[480px] w-full object-cover object-center rounded-lg shrink-0"
              src={image?.url_img}
              alt={`Gallery Image ${index + 1}`}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent text-white text-sm md:text-lg font-semibold px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
          {images[activeIndex]?.description}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          onClick={prevImage}
        >
          &#60;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          onClick={nextImage}
        >
          &#62;
        </button>
      </div>
      <div className="flex gap-4 mt-4 pb-4 overflow-x-auto md:flex hidden md:w-full md:justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer transition-transform duration-300 transform ${
              activeIndex === index ? "scale-110" : "scale-100"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image.url_img}
              alt={`Thumbnail ${index + 1}`}
              className="h-20 w-20 object-cover object-center rounded-lg border-2 border-transparent hover:border-gray-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
