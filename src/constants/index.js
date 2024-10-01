import {
  bitcoin,
  Tether,
  Ether,
  Us,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "rate",
    title: "Rate",
  },
  {
    id: "about",
    title: "About",
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
      "Exchange Gift Cards and Crypto in a Different Perspectivel with Big Leo",
    name: "Mark",
    image: "	https://swiftpaymobile.com/landing/img/t5.png",
  },
  {
    testimonial:
      "Reliable, responsible, trustworthy & swift platform. I'm glad it's been working as expected, great platform, well done Leo'sexchange.",
    name: "Jared",
    designation: "of ABK",
    image: "	https://swiftpaymobile.com/landing/img/t4.png",
  },
  {
    testimonial:
      "Quick response and good rate! He's honest and he's one person you can trust 100! Trade with Leo",
    name: "Maxwell",
    image: "	https://swiftpaymobile.com/landing/img/t1.jpg",
  },
];

export { technologies, testimonials };