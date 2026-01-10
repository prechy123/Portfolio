export interface Project {
  _id: number;
  name: string;
  stacks: string[];
  description: string;
  hostedLink: string;
  githubLink: string;
  images: string[] | null;
}

export const projects: Project[] = [
  {
    _id: 0,
    name: "SnapUs",
    stacks: ["React-Native(Expo)", "NestJs", "NextJs", "MongoDB", "AWS", "Fargate"],
    description:
      "SnapUs Makes It Effortless To Collect Photos And Videos From Everyone At Your Event, All In One Shared Album. No More Hassle Of Sharing Links Or Collecting Files. Just Scan, Shoot, And Share.",
    hostedLink: "https://www.snapus.app",
    githubLink: "https://www.snapus.app/mobile-app",
    images: [
      "/image/projects/snap-us/1.png",
      "/image/projects/snap-us/2.png",
      "/image/projects/snap-us/3.png",
      "/image/projects/snap-us/4.png",
    ],
  },
  {
    _id: 0.3,
    name: "SnapChat AI",
    stacks: ["NextJs", "MongoDB", "PostgresDB", "Azure", "Python + Fast API", "Llama", "Pinecone"],
    description:
      "SharpChat AI is an intelligent, multi-tenant whatsapp chatbot platform specifically engineered for Small and Medium Enterprises (SMEs) in Nigeria. By combining WhatsApp integration with AI agent.",
    hostedLink: "https://rain-meta-hack-web.vercel.app",
    githubLink: "https://rain-meta-hack-web.vercel.app",
    images: [
      "/image/projects/sharpchat/1.png",
      "/image/projects/sharpchat/2.png",
      "/image/projects/sharpchat/3.png",
      "/image/projects/sharpchat/4.png",
    ],
  },
  {
    _id: 1,
    name: "Anime-Connect",
    stacks: ["React", "NodeJs", "ExpressJs", "MongoDB"],
    description:
      "A full-stacks social media platform dedicated to anime enthusiasts around the world. Connect with fellow fans, share your favorite anime moments, and discover new series to binge-watch!",
    hostedLink: "https://anime-connect.onrender.com/",
    githubLink: "https://github.com/prechy123/Anime-Connect",
    images: [
      "/image/projects/weeebs/1.png",
      "/image/projects/weeebs/2.png",
      "/image/projects/weeebs/3.png",
      "/image/projects/weeebs/4.png",
    ],
  },
  {
    _id: 2,
    name: "board-games",
    stacks: [
      "NextJS",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Framer Motion",
      "TailwindCSS",
    ],
    description:
      "A user friendly Real-Time Cross-Platform Application to play different board games(such as. Tic-Tac-Toe, Chess, Checkers, Scrabble, Ludo e.t.c) with your friends and family. NextJs, NodeJs, React-Native",
    hostedLink: "https://board-games-two.vercel.app/",
    githubLink: "https://github.com/prechy123/board-games",
    images: [
      "/image/projects/board-games/1.png",
      "/image/projects/board-games/2.png",
      "/image/projects/board-games/3.png",
      "/image/projects/board-games/4.png",
    ],
  },
  {
    _id: 3,
    name: "Food-App-Vue",
    stacks: ["VueJS", "NodeJs", "ExpressJs", "MongoDB"],
    description:
      "This website allows users to search for food, view recipes and cooking instructions, and save their favorite recipes to their accounts built using VueJs.",
    hostedLink: "https://food-app-vuejs.onrender.com",
    githubLink: "https://github.com/prechy123/food-app-vueJS",
    images: [
      "/image/projects/food-vueJS/1.png",
      "/image/projects/food-vueJS/2.png",
      "/image/projects/food-vueJS/3.png",
      "/image/projects/food-vueJS/4.png",
    ],
  },
  {
    _id: 4,
    name: "Batch Tools",
    stacks: ["NextJs", "TypeScript", "Django", "TailwindCSS"],
    description:
      "An All-In-One application to perform various operation to your various file formats",
    hostedLink: "https://batchtools.site/",
    githubLink: "https://github.com/prechy123/Batch-Tools",
    images: [
      "/image/projects/batch-tools/1.png",
      "/image/projects/batch-tools/2.png",
      "/image/projects/batch-tools/3.png",
      "/image/projects/batch-tools/4.png",
    ],
  },
  {
    _id: 5,
    name: "Food-App",
    stacks: ["React", "NodeJs", "MongoDB", "ExpressJs", "Framer Motion"],
    description:
      "This website allows users to search for food, view recipes and cooking instructions, and save their favorite recipes to their accounts.",
    hostedLink: "https://foodapp-wmqs.onrender.com/",
    githubLink: "https://github.com/prechy123/Food-App",
    images: [
      "/image/projects/food-reactJS/1.png",
      "/image/projects/food-reactJS/2.png",
      "/image/projects/food-reactJS/3.png",
      "/image/projects/food-reactJS/4.png",
    ],
  },
  {
    _id: 6,
    name: "Portfolio",
    stacks: ["NextJs", "TailwindCSS"],
    description: " My personal portfolio built using Next.js with Typescript",
    hostedLink: "/",
    githubLink: "https://github.com/prechy123/Portfolio",
    images: [
      "/image/projects/portfolio/1.png",
      "/image/projects/portfolio/2.png",
      "/image/projects/portfolio/3.png",
      "/image/projects/portfolio/4.png",
    ],
  },

  {
    _id: 7,
    name: "CGPA Calculator",
    stacks: ["React-Native"],
    description: "Nigeria CGPA Calculator for IoS and Android",
    hostedLink:
      "https://drive.google.com/file/d/1skRCLftttrHMUAZnp9dZ-O-Ur5nSW3Dm/view?usp=drive_link",
    githubLink: "https://github.com/prechy123/CGPA-Calculator",
    images: [
      "",
      "",
      "/image/projects/cgpa-calculator/1.jpg",
      "/image/projects/cgpa-calculator/2.jpg",
      "/image/projects/cgpa-calculator/3.jpg",
      "/image/projects/cgpa-calculator/4.jpg",
    ],
  },
  {
    _id: 8,
    name: "PeerPocket",
    stacks: [
      "ReactJs",
      "NodeJs",
      "MongoDB",
      "ExpressJs",
      "Python",
      "SCSS",
      "Flask",
    ],
    description:
      "This is a website built in an hackathon where individuals can request loans from other people. The system is designed to facilitate the lending and borrowing of money between users, handling dispute and calculating credit score",
    hostedLink: "/",
    githubLink: "/",
    images: null,
  },
];
