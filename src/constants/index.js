import {
  bitcoin,
  Tether,
  Ether,
  Us,
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "rate",
    title: "Rate",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "Bitcoin",
    icon: bitcoin,
  },
  {
    name: "Tether",
    icon: Tether,
  },
  {
    name: "Ethereum",
    icon: Ether,
  },
  {
    name: "USD",
    icon: Us,
  },
];


const testimonials = [
  {
    testimonial:
      "Exchange Gift Cards and Crypto in a Different Perspective with Big Leo",
    name: "Mark",
    image: "https://swiftpaymobile.com/landing/img/t5.png", // Fixed leading spaces
  },
  {
    testimonial:
      "Reliable, responsible, trustworthy & swift platform. I'm glad it's been working as expected, great platform, well done Leo'sexchange.",
    name: "Jared",
    designation: "of ABK",
    image: "https://swiftpaymobile.com/landing/img/t4.png", // Fixed leading spaces
  },
  {
    testimonial:
      "Quick response and good rate! He's honest and he's one person you can trust 100%! Trade with Leo",
    name: "Maxwell",
    image: "https://swiftpaymobile.com/landing/img/t1.jpg", // Fixed leading spaces
  },
];

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: FaWhatsapp, // Reference to the WhatsApp PNG icon
    url: 'https://api.whatsapp.com/send/?phone=%2B2348053188798&text&type=phone_number&app_absent=0', // Replace with the correct link
  },
  {
    name: 'Facebook',
    icon: FaFacebook, // Reference to the Facebook PNG icon
    url: '#', // Replace with the correct link
  },
  {
    name: 'Instagram',
    icon: FaInstagram, // Reference to the Instagram PNG icon
    url: 'https://www.instagram.com/tradewithleo0?igsh=MTAwemlhN3o3ZXg4cA==', // Replace with the correct link
  },
];

export { technologies, testimonials, socialLinks };
