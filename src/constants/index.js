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
    id: "aboutus",
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
    name: 'Instagram',
    icon: FaInstagram, // Reference to the Instagram PNG icon
    url: 'https://www.instagram.com/tradewithleo0?igsh=MTAwemlhN3o3ZXg4cA==', // Replace with the correct link
  },
];

// faqData.js
const faqData = [
  {
    question: "Are You A Registered Company?",
    answer: "Yes, we are registered as an LLC with the Corporate Affairs Commission (CAC) with company registration number 7918301."
  },
  {
    question: "How long does it take to complete a transaction?",
    answer: "Generally, transactions are finished in 5 to 15 minutes, though this can vary based on a number of circumstances, including network congestion."
  },
  {
    question: "What is the minimum amoun of cryptocurrency i can sell on your app?",
    answer: "You can sell as little as $10 worth of cryptocurrencies on our app."
  },
  {
    question: "How Can I Contact Support?",
    answer: "You can contact support via telegram and watsapp by clicking any of these icon on the webpage or visit our contact section"
  },
];

export { technologies, testimonials, socialLinks, faqData };
