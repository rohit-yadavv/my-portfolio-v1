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
  gssoc,
  internshala,
  gfg,
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
    id: "Experience",
    title: "Experience",
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
  { name: "Sass", icon: sass },
  { name: "Material UI", icon: mui },
  { name: "Styled Component", icon: styledComponent },
  { name: "UI", icon: shadecn },
  { name: "Next.js", icon: nextjs },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: exprees },
  { name: "Fast API", icon: fastapi },
  { name: "Flask", icon: flask },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL", icon: sql },
  // { name: "Mongoose", icon: mongoose },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Prisma", icon: prisma },
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

const workExperience = [
  {
    title: "GirlScript Summer of Code Contributor",
    company_name: "GirlScript Foundation",
    icon: gssoc,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Contributed code to open-source projects, focusing on web development and data science.",
      "Participated in project meetings, providing insights to enhance project outcomes.",
      "Received recognition for consistent and impactful contributions.",
    ],
  },
  {
    title: "FullStack Development Intern at Web3Scope",
    company_name: "Web3Scope",
    icon: web3scope,
    iconBg: "#383E56",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Developed frontend and backend components using React.js and Node.js for Web3Scope's MVP.",
      "Collaborated with team members to resolve technical issues and enhance product functionality.",
      "Implemented user feedback to improve the product's user experience.",
    ],
  },

  {
    title: "HacktoberFest 2023",
    company_name: "Hacktoberfest",
    icon: hacktoberfest,
    iconBg: "#383E56",
    date: "Oct 2023",
    points: [
      "Contributed to open-source projects across various domains during Hacktoberfest 2023.",
      "Reviewed and tested pull requests to maintain code quality and project integrity.",
      "Engaged in community discussions, sharing knowledge and learning from others.",
    ],
  },
];
const leadershiproles = [
  {
    title: "Open Source Lead at GDSC CUH",
    company_name: "Google Developer Students Club",
    icon: gdsc,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Organized workshops and mentored developers to promote open-source culture.",
      "Managed the club's GitHub repository for smooth project collaboration.",
    ],
  },

  {
    title: "Geeks for Geeks Campus Ambassador at CUH",
    company_name: "GeeksforGeeks",
    date: "Apr 2024 - Present",
    icon: gfg,
    iconBg: "#383E56",
    points: [
      "Promoted GeeksforGeeks resources to enhance students' technical skills.",
      "Organized coding competitions and facilitated sessions on programming concepts.",
    ],
  },
  {
    title: "Internshala Student Partner",
    company_name: "Internshala",
    icon: internshala,
    iconBg: "#383E56",
    date: "Feb 2024 - Apr 2024",
    points: [
      "Organized events and mentored peers to promote Internshala's programs.",
      "Collaborated with Internshala to facilitate workshops for student development.",
    ],
  },
];

export {
  workExperience,
  leadershiproles,
  services,
  technologies,
  testimonials,
  projects,
};
