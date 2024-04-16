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
  sass,
  gdsc,
  ecoomerce,
  styledComponent,
  sql,
  redux,
  learneaseu,
  weboverflow,
  hacktoberfest,
  questify,
  firebase,
  graphql,
  postgresql,
  postman,
  typescript,
  docker,
  cpp,
  nextjs,
  prisma,
  vercel,
  web3scope,
  shadecn,
  gecPortal,
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
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Nextjs Developer",
    icon: mobile,
  },
  {
    title: "React-Native Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "GraphQl",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "vercel",
    icon: vercel,
  },
  {
    name: "html",
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
    name: "Git",
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
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "Styled Component",
    icon: styledComponent,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "UI",
    icon: shadecn,
  },
];

const testimonials = [
  {
    testimonial:
      "Rohit has expertise in Next.js that allowed him to create beautiful, responsive, and robust interfaces that exceeds my expectations.",
    name: "Ashutosh",
    designation: "HR",
    company: "web3scope",
  },
];

const projects = [
  {
    name: "GEC PORTAL",
    description:
      "Platform for efficient announcement and management of GEC, VAC,and events by teachers,simplifying the application process for 3000+ students.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "shadecn",
        color: "pink-text-gradient",
      },
    ],
    image: gecPortal,
    onlineRepo: live,
    source_code_link: "https://github.com/rohit-yadavv/gec-portal",
  },
  {
    name: "webOverflow",
    description:
      "WebOverflow is a dynamic Q&A platform where you can post, answer, upvote and downvote questions",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "shadecn",
        color: "pink-text-gradient",
      },
    ],
    image: weboverflow,
    onlineRepo: live,
    source_code_link: "https://github.com/Rohit-Yadavv/weboverflow",
  },
  {
    name: "LearnEaseU",
    description:
      "Website to simplify studies of CUH students. Download Sessionals,Study materials, and PYQs of Central University of Haryana.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "tsparticles",
        color: "pink-text-gradient",
      },
    ],
    image: learneaseu,
    onlineRepo: live,
    source_code_link: "https://github.com/rohit-yadavv/cuh-help",
  },
  {
    name: "Questify",
    description:
      "Questify is a dynamic and user-friendly MERN Blogging1 application I developed to create and manage my blogs effectively.",
    // • Features: Admin Dashboard, User Authentication, SEO Optimization, User Profiles, Liked Articles
    // • Skill: MERN Stack, Javascript, Authentication, Cookies, JWT, Bcryptjs, react-helmet(SEO), MongoDB, DataBase"
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "seo",
        color: "green-text-gradient",
      },
      {
        name: "authentication",
        color: "pink-text-gradient",
      },
    ],
    image: questify,
    onlineRepo: live,
    source_code_link: "https://github.com/Rohit-Yadavv/questify",
  },
  {
    name: "Ecommerce App",
    description:
      "Ecommerce Website having clean interface, user-friendly navigation, secure transactions and a seamless online shopping experience.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "styledcomponents",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: ecoomerce,
    onlineRepo: live,
    source_code_link:
      "https://github.com/rohit-yadavv/ecommerce-production-app/",
  },
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
    source_code_link: "https://github.com/rohit-yadavv/total-fitness/",
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
    source_code_link: "https://github.com/rohit-yadavv/My-weather-App/",
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
  {
    name: "Tic Tac Toe",
    description:
      "Offers a fun and interactive way to play the classic game of tic-tac-toe with intuitive and user-friendly interface ",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: TicTacToe,
    onlineRepo: live,
    source_code_link: "https://github.com/rohit-yadavv/tic-tac-toe",
  },
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

const experiences = [
  {
    title: "FullStack Development Intern at web3scope",
    company_name: "Web3Scope",
    icon: web3scope,
    iconBg: "#383E56",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Contributed in building the MVP of Web3Scope and worked on various MVP applications as part of an incubator project.",
      "Acquired and strengthened skills in full-stack development, gaining hands-on experience in building web applications.",
      "Received positive feedback for contributions, highlighting a proactive and impactful approach.",
    ],
  },
  {
    title: "Open Source Lead at GDSC CUH",
    company_name: "Google Developer Students Club",
    icon: gdsc,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Lead and coordinate open-source initiatives within the GDSC community.",
      "Manage and mentor a team of developers and contributors.",
      "Organized open-source events to encourage participation and contributions from club members.",
    ],
  },
  {
    title: "HacktoberFest 2023",
    company_name: "Hacktoberfest",
    icon: hacktoberfest,
    iconBg: "#383E56",
    date: "October 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Among first 50,000 contributors during Hacktoberfest, tree planted in honor by digitalOcean.",
      "Successfully Merged 4 Pull Requests (PRs) into open-source repositories during the event.",
    ],
  },
];

export { experiences, services, technologies, testimonials, projects };
