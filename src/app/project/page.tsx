import ProjectCard from "@/components/projectCom/ProjectCard";
import { projects } from "../projectsContents";
import { GitHub, Launch } from "@mui/icons-material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bamidele - Projects",
};

export default function ProjectPage() {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center relative">
      <div className="md:w-[600px] flex flex-col items-center">
        <div>
          <h1 className=" relative text-2xl pb-4">
            Projects
            <span className="absolute w-16 bg-gradient-to-r from-blue-500 to-pink-500 -top-2 h-1 left-0 rounded-lg"></span>
          </h1>
          <div className=" grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project._id}>
                <div className=" flex justify-between">
                  <a href={project.hostedLink} target="_blank">
                    <h2>{project.name}</h2>{" "}
                  </a>
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
                <a href={project.hostedLink} target="_blank">
                  <div>
                    <p>{project.description}</p>
                    <div>
                      <h2 className=" pt-1">Technologies Used: </h2>
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
      </div>
    </section>
  );
}
