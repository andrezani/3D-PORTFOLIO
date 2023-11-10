import {
  logo,
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  draft_fantasy,
  insmartcode,
  ev_energy,
  city_hall,
  ev_energy_project,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mobile Application Developer",
    company_name: "Draft Fantasy",
    icon: draft_fantasy,
    iconBg: "#383E56",
    date: "October 2017 - April 2018",
    points: [
      "Collaborated with design and product teams to identify, define and develop new features for the Draft Fantasy game, resulting in increased user engagement and retention.",
      "Worked with the back-end development team to integrate new features and ensure they are properly implemented and functioning as expected.",
      "Conducted testing and debugging to ensure the quality and stability of new features before deployment, resulting in a smooth and seamless user experience.",
      "Utilized React Native components and libraries to develop reusable and scalable components, resulting in efficient development and increased code quality.",
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "iNSmart Code",
    icon: insmartcode,
    iconBg: "#E6DEDD",
    date: "May 2018 - October 2018",
    points: [
      "Successfully shipped two React Native cross-platform mobile apps from scratch",
      "Collaborated with design and product teams to ensure user-friendly and intuitive interfaces.",
      "Conducted code reviews and utilized Agile methodologies to ensure timely delivery of high-quality products.",
      "Kept up-to-date with the latest technologies and tools to implement efficient solutions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "ev.energy",
    icon: ev_energy,
    iconBg: "#383E56",
    date: "October 2018 - January 2021",
    points: [
      "Delivered high-quality mobile features quickly and efficiently with well-structured code.",
      "Designed and implemented reusable, high-performance components.",
      "Identified and resolved performance issues and debugged production and non-production issues.",
      "Collaborated with cross-functional teams to define project requirements and timelines.",
      "Reviewed code and provided constructive feedback to maintain high code quality.",
      "Worked with product and design teams to ensure an intuitive user experience.",
    ],
  },
  {
    title: "Chief Technology Officer",
    company_name: "Gjirokastra City Hall",
    icon: city_hall,
    iconBg: "#E6DEDD",
    date: "January 2021 - June 2022",
    points: [
      "Led and managed all technology operations, ensuring alignment with established goals and objectives.",
      "Developed and implemented IT policies and systems to support government strategies set by upper management.",
      "Conducted in-depth analysis of business requirements across all departments to identify and address technology needs.",
      "Managed vendor relationships and negotiated contracts to ensure best pricing and terms for hardware, software, and services.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Freelancer",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "Developed and maintained cross-platform mobile applications for Android and iOS using React Native, allowing for efficient and cost-effective development without compromising on the user experience or functionality.",
      "Worked with design and product teams to create user-friendly and intuitive interfaces and user experiences that meet the latest design trends and standards, while also ensuring the application is optimized for performance and scalability.",
      "Leveraged JavaScript frameworks, including React and Vue, to build dynamic and responsive web applications that are scalable, maintainable, and customizable.",
      "Developed custom themes and plugins for WordPress, leveraging PHP and WordPress APIs, to provide robust and secure solutions that meet the specific needs of clients and end-users.",
    ],
  },
];

const projects = [
  {
    name: "ev.energy | Smart EV Charging App",
    description:
      "Automatically charge your vehicle with the cheapest and cleanest electricity available in your area. Full control, in the palm of your hand.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "reduxjs",
        color: "pink-text-gradient",
      },
    ],
    image: ev_energy_project,
    company_image: ev_energy,
    source_link: "https://www.ev.energy/",
  },
];

export { services, technologies, experiences, projects };
