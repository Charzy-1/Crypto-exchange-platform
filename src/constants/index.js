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
      "Exchange Gift Cards and Crypto in a Different Perspective",
    name: "Pamphile MKP",
    designation: "TRCN",
    company: "Chill Academy",
    image: "https://avatars.githubusercontent.com/u/98436409?v=4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Charles does.",
    name: "Basit Ali",
    designation: "PKSTN",
    company: "DRC 145",
    image: "https://avatars.githubusercontent.com/u/63063973?v=4",
  },
  {
    testimonial:
      "After Charles optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Gabriel Aghogho",
    designation: "TRCN",
    company: "Ciddi Mutfak",
    image: "https://pbs.twimg.com/media/FqJ8a-CXgAUiUNF.jpg",
  },
];

export { technologies, testimonials };