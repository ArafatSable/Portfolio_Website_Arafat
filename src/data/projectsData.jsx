// src/data/projectsData.jsx

// 1) import your images
import chatifyImg    from "../assets/car.png";
import bitsofcodeImg from "../assets/car.png";
// …and any others

// 2) export an array of plain objects
const projects = [
  {
    id: 1,
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace to share resources and hang out with friends. Built with React.js, Material-UI, and Firebase; supports real-time messaging, image sharing, and reactions.",
    image: chatifyImg,
    github: "https://github.com/your-username/chatify",
    demo:   "https://chatify.example.com",
  },
  {
    id: 2,
    title: "Bits-of-Code",
    description:
      "My personal blog built with Next.js & Tailwind CSS that pulls markdown files at build time. Supports dark mode and makes writing & deploying posts a breeze.",
    image: bitsofcodeImg,
    github: "https://github.com/your-username/bits-of-code",
    demo:   "https://bits-of-code.example.com",
  },
  {
    id: 3,
    title: "Bits-of-Code",
    description:
      "My personal blog built with Next.js & Tailwind CSS that pulls markdown files at build time. Supports dark mode and makes writing & deploying posts a breeze.",
    image: bitsofcodeImg,
    github: "https://github.com/your-username/bits-of-code",
    demo:   "https://bits-of-code.example.com",
  },
  {
    id: 4,
    title: "Bits-of-Code",
    description:
      "My personal blog built with Next.js & Tailwind CSS that pulls markdown files at build time. Supports dark mode and makes writing & deploying posts a breeze.",
    image: bitsofcodeImg,
    github: "https://github.com/your-username/bits-of-code",
    demo:   "https://bits-of-code.example.com",
  },
  {
    id: 5,
    title: "Bits-of-Code",
    description:
      "My personal blog built with Next.js & Tailwind CSS that pulls markdown files at build time. Supports dark mode and makes writing & deploying posts a breeze.",
    image: bitsofcodeImg,
    github: "https://github.com/your-username/bits-of-code",
    demo:   "https://bits-of-code.example.com",
  },
];

export default projects;
