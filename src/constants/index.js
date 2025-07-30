import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux, // Imported but not used in this specific constants file
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  WCG,
  zormor,
  UWC,
  mychat,
  todoapp,
  nyambichick,
  threejs,
} from "../assets";

 const navLinks = [
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
    title: "React  Developer", // Double space here, might want to fix
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI design",
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
  // Missing Redux here if it's a core technology you want to list
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
    title: " Developer Graduate Intern",
    company_name: "Western Cape Government",
    icon: WCG,
    iconBg: "#383E56",
    date: "August 2024 - Present", // As of Apr 2025, this might need updating if still current
    points: [
      "WCG portal Contribution to the development of new Drupal 10 based portal for the WCG websites which includes subsites for various department. The project involved upgrading from Drupal 7 to Drupal 10, focusing on implementing a modern design and improved functionality.", // Sentence structure could be improved slightly
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Assisted in in writing unit tests and debugging issues to enhance web performance.", // "in in" typo
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Utilize development tools like Drupal, ubuntu server, Virtual Machines and LAMP stack",
      "Gained experience working in an Agile environment and using version control. (Git)",
    ],
  },
  {
    title: "Software Enginer Intern(Remote)", // "Enginer" typo
    company_name: "Zormor",
    icon: zormor,
    iconBg: "#E6DEDD",
    date: "May 2024 - September 2024",
    points: [
      "Developed backend features for a web application using Typescript, Graphql and Nestjs.",
      "Collaborated with cross-functional teams to design, develop, implement , and deploy scalable software solutions for the Zormor platform.", // Extra space before comma
      "Implemented RESTful APIs and improved database performance.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Worked Under Agile methodology.",
    ],
  },
  // {
  //   title: "PES Intern",
  //   company_name: "University of the Western Cape",
  //   icon: UWC,
  //   iconBg: "#383E56",
  //   date: "June 2024 - August 2024",
  //   points: [
  //     "Assisted the Oral Hygiene department with Admin and IT related task.",
  //     "Managed Ikamva project in Khayelitsha that was founded by UWC Oral Hygiene Department.", // Consider adding more detail if possible
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I had worked with kwenzo in completing many projects at the university he is the hardworking person I know and I like about him the fact that he dedicate himself to what he is doing .", // "kwenzo" capitalization, punctuation needed
    name: "Sihle Joseph",
    designation: "Student",
    company: "UWC",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kwenzo does.", // Consistent capitalization ("Kwenzo")
    name: "Tumelo Petsane",
    designation: "Software developer",
    company: "Western Cape Government",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "My - Chat",
    description:
      "Web-based platform that allows users to chat with other users and manage chats.Hit the play icon to dive into the live version",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mychat,
    source_code_link: "https://github.com/Dungul020/My-Chat-App",
    // --- MODIFICATION START ---
    live_demo_link: "https://my-chat-app-prod.onrender.com", 
  },

  {
    name: "Todo-app",
    description:
      "A mern stack todo-list app that allows individual to plan out their task and mark them as complete if completed to avoid confusion.Click the play icon to interact with the live version.", // "individual" -> "individuals"
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase", 
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todoapp,
    source_code_link: "https://github.com/Dungul020/Todo-list",
    live_demo_link: "https://my-to-do-app-fqk3.onrender.com",
  },

  {
    name: "Nyambi Chick",
    description:
      "An ecommerce website that allow brand owners to host their product in the platform and it also allows users to browse and place their orders on the platform", // "allow" -> "allows"
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase", // Verify backend tech used
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyambichick,
    source_code_link: "https://github.com/Dungul020/Responsive-e-commerce-website",
  },
];

// Ensure all defined constants intended for use elsewhere are exported
export { services, technologies, experiences, testimonials, projects, navLinks };
