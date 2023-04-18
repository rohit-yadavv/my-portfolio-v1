import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  bootstrap,
  vscode,
  python,
  mui,
  totalFitness,
  WeatherApp,
  ApniNews,
  live,
  github
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "JS Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "VsCode",
    icon: vscode,
  },
  {
    name: "Python",
    icon: python,
  },
];

const testimonials = [
  {
    testimonial:
      "...",
    name: "...",
    designation: "...",
    company: "...",
    image: "...",
  },
 
];
const projects = [
  {
    name: "Fitness App",
    description:
      "Web-based platform providing a convenient way to search for any type of exercises by its target muscles, equipment etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: totalFitness,
    onlineRepo: live,
    source_code_link: "https://rohit-fitnesss.netlify.app/",
  },
  {
    name: "Weather App",
    description:
      "Web application that enables users to search for weather on their current location or at any other place around the globe",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openweatherapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: WeatherApp,
    onlineRepo: live,
    source_code_link: "https://live-weather-check.netlify.app/",
  },
  {
    name: "News App",
    description:
      "Application that provides a efficient way to search for any type of News with categories Entertainment, Sports, Technology etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ApniNews,
    onlineRepo: github,
    source_code_link: "https://github.com/Rohit-Yadavv/ApniNews",
  },
  
];

export { services, technologies, testimonials, projects };
