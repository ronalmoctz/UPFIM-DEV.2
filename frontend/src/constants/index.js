import { FaHandHoldingHeart, FaPeopleCarry } from "react-icons/fa";
import { MdDiversity3 } from "react-icons/md";

import car01 from "../assets/car01.png";
import car02 from "../assets/car02.png";
import car03 from "../assets/car03.png";

import user01 from "../assets/user01.png";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";
import user04 from "../assets/user04.png";

export const intro = {
  title: "Descubre Cultura & Deportes",
  description:
    "La cultura abarca conocimientos, creencias y expresiones que definen a una sociedad, mientras que el deporte es actividad física recreativa o competitiva. Incluyen arte, música, literatura, religión y deportes como atletismo y fútbol.",
};

export const carsInfo = [
  {
    name: "Fortuner",
    purpose: "selling",
    image: car01,
  },
  {
    name: "Chevrolet Camaro",
    purpose: "buying",
    image: car02,
  },
  {
    name: "Toyota Car",
    purpose: "renting",
    image: car03,
  },
];

export const reviews = [
  {
    name: "Mtra. Samantha Green Hernendez Hernandez gleed",
    
    avatar: user01,
    quote:" danza folklórica",
    rating: "Deportivo",
    
  },
  {
    name: "Mtra. Samantha Green Hernendez Hernandez gleed",

    avatar: user02,
    quote:"danza folklórica.",
    rating: "Deportivo",

  },
  {
    name: "Mtra. Samantha Green Hernendez Hernandez gleed",
  
    avatar: user03,
    quote:
      "danza folklórica",
    rating: "Deportivo",

  },
  {
    name: "Mtra. Samantha Green Hernendez Hernandez gleed",
   
    avatar: user04,
    quote:
      " danza folklórica",
    rating: "Deportivo",

  },
  {
    name: "Mtra. Samantha Green Hernendez Hernandez gleed",
    avatar: user03,
    quote:
      " danza folklórica",
    rating: "Deportivo",
 
  },
  {
    name: "Mtra. Samantha Green Hernendez Hernandez gleed",
    avatar: user02,
    quote:
      " danza folklórica",
    rating: "Deportivo",

  },
];

export const steps = [
  {
    img: MdDiversity3,
    bgFrom: "from-blue-500",
    bgTo: "to-purple-500",
    title: "Promover la inclusión y la diversidad",
  },
  {
    img: FaHandHoldingHeart,
    bgFrom: "from-green-500",
    bgTo: "to-teal-500",
    title: "Fomentar los valores y la ética",
  },
  {
    img: FaPeopleCarry,
    bgFrom: "from-red-500",
    bgTo: "to-pink-500",
    title: "Generar vínculos y cohesión comunitaria",
  },
];
