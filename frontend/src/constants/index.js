import { FaSearch, FaCalendarAlt, FaCar } from "react-icons/fa";

import car01 from "../assets/car01.png";
import car02 from "../assets/car02.png";
import car03 from "../assets/car03.png";

import user01 from "../assets/user01.png";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";
import user04 from "../assets/user04.png";

export const intro = {
  title: "Welcome to CarVista",
  description:
    "Your ultimate destination for finding the perfect car. Explore our extensive collection and drive away in your dream vehicle today.",
};

export const menuItems = [
  { name: "Blog", href: "#blog" },
  { name: "Services", href: "#services" },
  { name: "FAQs", href: "#faqs" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Team", href: "#team" },
];

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
    name: "Emily Clark",
    role: "Car Enthusiast",
    avatar: user01,
    quote:
      "I found my dream car here! The process was seamless and the staff was very helpful.",
    rating: 4.9,
    totalReviews: 45,
  },
  {
    name: "Michael Brown",
    role: "Professional Racer",
    avatar: user02,
    quote:
      "Great selection of high-performance cars. The customer service is top-notch.",
    rating: 5.0,
    totalReviews: 60,
  },
  {
    name: "Samantha Green",
    role: "Mechanic",
    avatar: user03,
    quote:
      "Bought a car for my workshop. The quality is excellent and the price was reasonable.",
    rating: 4.7,
    totalReviews: 30,
  },
  {
    name: "James Wilson",
    role: "SUV Lover",
    avatar: user04,
    quote:
      "Fantastic range of SUVs. I am very satisfied with my purchase and the overall experience.",
    rating: 4.8,
    totalReviews: 38,
  },
  {
    name: "Linda Johnson",
    role: "Family Driver",
    avatar: user03,
    quote:
      "The perfect place to find a family car. Safe, reliable, and affordable options.",
    rating: 4.9,
    totalReviews: 52,
  },
  {
    name: "Robert Davis",
    role: "Classic Car Collector",
    avatar: user02,
    quote:
      "An amazing collection of classic cars. I found exactly what I was looking for.",
    rating: 5.0,
    totalReviews: 40,
  },
];

export const steps = [
  {
    icon: FaSearch,
    bgFrom: "from-blue-500",
    bgTo: "to-purple-500",
    title: "Browse Inventory",
    description:
      "Explore our extensive collection of cars to find the one that suits your needs.",
  },
  {
    icon: FaCalendarAlt,
    bgFrom: "from-green-500",
    bgTo: "to-teal-500",
    title: "Schedule a Test Drive",
    description:
      "Set up a test drive to experience the car and ensure it's the right fit for you.",
  },
  {
    icon: FaCar,
    bgFrom: "from-red-500",
    bgTo: "to-pink-500",
    title: "Finalize Your Purchase",
    description: "Complete the paperwork and drive away in your new car!",
  },
];

export const footer = {
  title: "CarVista",
  slogan: "See the Road Ahead",
  description:
    " CarVista offers the best selection of cars to help you find the perfect ride for your needs. Whether you're looking for a family car, a high-performance vehicle, or a classic collectible, we've got you covered.",
};

 