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
  github,
  ToDoList,
  TicTacToe,
  ApnaBaaja,
  HarshitImg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
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
      "Rohit has expertise in React that allowed him to create beautiful, responsive, and user-friendly interfaces that exceedes my expectations.",
    name: "Harshit",
    designation: "Student",
    company: "CUH",
    image: {live}
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
  
  // {
  //   name: "To DO List",
  //   description:
  //     "A simple and user-friendly todo website that allows users to create, and delete their tasks in a simple and intuitive way .",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ToDoList,
  //   onlineRepo: live,
  //   source_code_link: "https://tonotes.netlify.app",
  // },
  // {
  //   name: "Tic Tac Toe",
  //   description:
  //     "Offers a fun and interactive way to play the classic game of tic-tac-toe with intuitive and user-friendly interface ",
  //   tags: [
  //     {
  //       name: "javascript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: TicTacToe,
  //   onlineRepo: live,
  //   source_code_link: "https://apna-tic-tac-toe.netlify.app",
  // },
  // {
  //   name: "Music Player",
  //   description:
  //     "All new Music Player with modern ui that offers easy-to-use controls for seamless music playback ",
  //   tags: [
  //     {
  //       name: "javascript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ApnaBaaja,
  //   onlineRepo: github,
  //   source_code_link: "https://github.com/Rohit-Yadavv/Music-Player",
  // },

];

export { services, technologies, testimonials, projects };
