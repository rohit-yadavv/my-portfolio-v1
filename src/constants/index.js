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
  githubTech,
  ToDoList,
  TicTacToe,
  ApnaBaaja,
  HarshitImg,
  sass,
  gdsc,
  ecoomerce,
  github,
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
  numpy,
  pandas,
  sklearn,
  docker,
  cpp,
  c,
  nextjs,
  prisma,
  vercel,
  web3scope,
  shadecn,
  gecPortal,
  numPy,
  exprees,
  fastapi,
  flask,
  figma,
  linux,
  mongoose,
  matplotlib,
  seaborn,
  quizapp,
  atsTracking,
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
    title: "NextjsDeveloper",
    icon: mobile,
  },
  {
    title: "React-Native Developer",
    icon: backend,
  },
];

const technologies = [
  { name: "C", icon: c },
  { name: "C++", icon: cpp },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "HTML", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Tailwind", icon: tailwind },
  { name: "Material UI", icon: mui },
  { name: "Styled Component", icon: styledComponent },
  { name: "Sass", icon: sass },
  { name: "UI", icon: shadecn },
  { name: "Next.js", icon: nextjs },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: exprees },
  { name: "Fast API", icon: fastapi },
  { name: "Flask", icon: flask },
  { name: "MongoDB", icon: mongodb },
  // { name: "Mongoose", icon: mongoose },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Prisma", icon: prisma },
  { name: "SQL", icon: sql },
  { name: "Docker", icon: docker },
  { name: "Firebase", icon: firebase },
  { name: "Figma", icon: figma },
  { name: "Git", icon: git },
  { name: "GitHub", icon: githubTech },
  { name: "GraphQL", icon: graphql },
  { name: "Redux", icon: redux },
  { name: "NumPy", icon: numPy },
  { name: "Pandas", icon: pandas },
  { name: "matplotlib", icon: matplotlib },
  { name: "seaborn", icon: seaborn },
  { name: "Scikit-learn", icon: sklearn },
  { name: "Linux", icon: linux },
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
      "Platform for efficient management of GECs,VACs and events,simplifying the application process for 5000+ students also integrated with university website",
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
      "WebOverflow is a dynamic Q&A platform where you can post, answer, upvote and downvote questions and can generate answers with ai",
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
      "It simplify studies of CUH students. Students can download and share sessionals, study materials, and PYQs of Central University of Haryana",
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
      "Questify is a dynamic and user-friendly MERN Blogging1 application I developed to create and manage my blogs effectively with features like admin dashboard",
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
    name: "ATS Tracking APP",
    description:
      "It effortlessly analyzes resumes, delivering a quick percentage match and highlighting missing keywords. Simplify your recruitment journey.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gemini",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
    ],
    image: atsTracking,
    onlineRepo: live,
    source_code_link: "https://github.com/rohit-yadavv/ats-tracking-system",
  },
  {
    name: "Fitness App",
    description:
      "Web-based platform providing a convenient way to search for any type of exercises by its target muscles, equipment etc. with recommending videos related to exercise",
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
  // {
  //   name: "Weather App",
  //   description:
  //     "Web application that enables users to search for weather on their current location or at any other place around the globe",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "openweatherapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: WeatherApp,
  //   onlineRepo: live,
  //   source_code_link: "https://github.com/rohit-yadavv/My-weather-App/",
  // },
  // {
  //   name: "News App",
  //   description:
  //     "Application that provides a efficient way to search for any type of News with categories Entertainment, Sports, Technology etc.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "newsapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ApniNews,
  //   onlineRepo: github,
  //   source_code_link: "https://github.com/Rohit-Yadavv/ApniNews",
  // },

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
  //   source_code_link: "https://github.com/rohit-yadavv/tic-tac-toe",
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
