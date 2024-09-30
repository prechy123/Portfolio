import TypingAnimation from "@/components/ui/TypingAnimation";
import {
  GitHub,
  Instagram,
  Launch,
  LinkedIn,
  Mail,
  Mouse,
  Twitter,
  WavingHand,
} from "@mui/icons-material";
import Link from "next/link";
import { projects } from "./projectsContents";
import ProjectCard from "@/components/projectCom/ProjectCard";
import ContactCom from "@/components/ui/ContactCom";

export default function HomePage() {
  return (
    <>
      <section className="container md:py-24 flex flex-col items-center h-screen justify-center md:justify-normal ">
        <div className="text-3xl md:w-[600px]">
          <h1 className=" text-7xl animate-pulse pb-4">
            Hello{" "}
            <span>
              <WavingHand className=" text-5xl" />
            </span>
          </h1>
          <h3>
            My name is <span>Bamidele Ayomide Precious</span>
          </h3>
          <h3>
            I am a <TypingAnimation />{" "}
          </h3>
          <Link
            href="/about"
            className="learn-more-btn my-4 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent"
          >
            Learn More
          </Link>
          <ContactCom />
          <div className=" absolute bottom-24 md:bottom-10 left-1/2 right-1/2 flex flex-col items-center ">
            <Mouse className=" animate-bounce" />
            <span className="text-sm text-nowrap">Scroll Down</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center h-screen justify-center relative">
        <div className="md:w-[600px]">
          <h2 className=" relative text-2xl pb-4">
            Technologies
            <span className="absolute w-16 bg-gradient-to-r from-blue-500 to-pink-500 -top-2 h-1 left-0 rounded-lg"></span>
          </h2>
          <div className=" flex gap-4 flex-col md:flex-row">
            <div className="technology-card">
              <h2>Front-End</h2>
              <p>
                Experience with: <br />
                1. NextJs,
                <br />
                2. NuxtJs, <br />
                3. ReactJs, <br />
                4. VueJs, <br />
                5. React Native, <br />
                6. Framer-Motion, <br />
                7. Material UI, and <br />
                8. TailwindCSS.
              </p>
            </div>
            <div className="technology-card">
              <h2>Back-End</h2>
              <p>
                Experience with: <br />
                1. NodeJs, <br />
                2. ExpressJs, <br />
                3. MongoDB, <br />
                4. JWT, and
                <br />
                5. Passport.
                <br />
              </p>
            </div>
          </div>
          <div className=" absolute bottom-2 md:bottom-10 left-1/2 right-1/2 flex flex-col items-center ">
            <Mouse className=" animate-bounce" />
            <span className="text-sm text-nowrap">
              Visit to explore a range of real-world projects.
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center h-screen justify-center relative">
        <div className="md:w-[600px] flex flex-col items-center">
          <div>
            <h2 className=" relative text-2xl pb-4">
              Projects
              <span className="absolute w-16 bg-gradient-to-r from-blue-500 to-pink-500 -top-2 h-1 left-0 rounded-lg"></span>
            </h2>
            <div className=" grid md:grid-cols-2 gap-4">
              {projects
                .filter((_project, index) => index < 2)
                .map((project) => (
                  <ProjectCard key={project._id}>
                    <div className=" flex justify-between">
                      <h2>{project.name}</h2>
                      <div>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          className=" pr-2"
                        >
                          <GitHub />
                        </a>
                        <a href={project.hostedLink} target="_blank">
                          <Launch />
                        </a>
                      </div>
                    </div>
                    <a href={`/project/${project._id}`}>
                      <div>
                        <p>
                          {project.description}...{" "}
                          <p className="underline">view more</p>
                        </p>

                        <div>
                          <h2 className="pt-1">Technologies Used: </h2>
                          {project.stacks.map((stack, index) => (
                            <span
                              key={stack}
                              className=" bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
                            >
                              {stack}
                              {index === project.stacks.length - 1 ? "" : " - "}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </ProjectCard>
                ))}
            </div>
          </div>
          <Link
            href="/projects"
            className="view-more-btn my-4 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent"
          >
            View More
          </Link>
        </div>
      </section>
    </>
  );
}
