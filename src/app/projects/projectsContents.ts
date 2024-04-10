interface projects {
    _id: number,
    name: string,
    stacks: string[],
    description: string,
    type: string,
    hostedLink: string,
    githubLink: string
}

export const projects: projects[] = [
  {
    _id: 1,
    name: "Anime-Connect",
    stacks: ["React", "NodeJs", "ExpressJs", "MongoDB"],
    description:
      "A full-stacks social media platform dedicated to anime enthusiasts around the world. Connect with fellow fans, share your favorite anime moments, and discover new series to binge-watch!",
    type: "open source",
    hostedLink: "https://anime-connect.onrender.com/",
    githubLink: "https://github.com/prechy123/Anime-Connect",
  },
  {
    _id: 2,
    name: "Food-App",
    stacks: ["React", "NodeJs", "MongoDB", "ExpressJs", "Framer Motion"],
    description:
      "This website allows users to search for food, view recipes and cooking instructions, and save their favorite recipes to their accounts.",
    type: "open source",
    hostedLink: "https://foodapp-wmqs.onrender.com/",
    githubLink: "https://github.com/prechy123/Food-App",
  },
  {
    _id: 3,
    name: "PeerPocket",
    stacks: ["ReactJs", "NodeJs", "MongoDB", "ExpressJs", "Python", "SCSS", "Flask"],
    description:
      "This is a website built in an hackathon where individuals can request loans from other people. The system is designed to facilitate the lending and borrowing of money between users, handling dispute and calculating creadi score",
    type: "Hackerthon",
    hostedLink: "https://peer-pocket.onrender.com/",
    githubLink: "https://github.com/Bit-Lockers",
  },
  {
    _id: 4,
    name: "Portfolio",
    stacks: ["NextJs", "TailwindCSS"],
    description:
      " My personal portfolio built using Next.js with Typescript",
    type: "open source",
    hostedLink: "",
    githubLink: "https://github.com/prechy123/Portfolio",
  },
  {
    _id: 5,
    name: "GDmovies",
    stacks: ["EJS", "NodeJs", "MongoDB", "ExpressJs"],
    description:
      "(DESKTOP ONLY) This is a simple Node.js web application that uses Express and MongoDB to create a movie list. with only 3 movies added, with google drive links attached, movies include:  wednesday, vengeance, vesper",
    type: "open source",
    hostedLink: "https://gdmovies.onrender.com/",
    githubLink: "https://github.com/prechy123/GDmovies",
  },
  {
    _id: 6,
    name: "Lago",
    stacks: ["ReactJs", "NodeJs", "MongoDB", "ExpressJs", "Framer Motion"],
    description:
      "(DESKTOP ONLY) This is a simple ReactJs application to perfect React skills",
    type: "open source",
    hostedLink: "https://lago-xw5l.onrender.com",
    githubLink: "https://github.com/prechy123/Lago",
  },
  {
    _id: 7,
    name: "Elizade Clone",
    stacks: ["HTML", "CSS", "Javascript"],
    description:
      "A cloned elizade universiy website",
    type: "open source",
    hostedLink: "https://prechy123.github.io/Elizade-Website-Clone/",
    githubLink: "https://github.com/prechy123/Lago",
  },
];
