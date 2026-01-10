import ProjectCard from "@/components/projectCom/ProjectCard";
import { GitHub, Launch } from "@mui/icons-material";
import { Metadata } from "next";
import { projects } from "../projectsContents";

export const metadata: Metadata = {
  title: "Bamidele - Projects",
};

export default function ProjectPage() {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center relative fade-in">
      <div className="md:w-[1000px] max-w-full flex flex-col items-center">
        <div>
          <h1 className="relative text-2xl pb-4 slide-up">
            Projects
            <span className="absolute w-16 bg-gradient-to-r from-blue-500 to-pink-500 -top-2 h-1 left-0 rounded-lg"></span>
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={project._id}>
                <div className="flex justify-between">
                  <a
                    href={project.hostedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="hover:text-pink-500 transition-colors">
                      {project.name}
                    </h2>
                  </a>
                  <div>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pr-2 link-hover inline-block"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={project.hostedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover inline-block"
                      aria-label={`Visit ${project.name} live site`}
                    >
                      <Launch />
                    </a>
                  </div>
                </div>
                <a href={`/project/${project._id}`}>
                  <div className="group">
                    <p className="group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {project.description}...{" "}
                      <span className="underline text-pink-500 group-hover:text-pink-400">
                        view more
                      </span>
                    </p>
                    <div>
                      <h2 className="pt-1">Technologies Used: </h2>
                      {project.stacks.map((stack, index) => (
                        <span
                          key={stack}
                          className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent font-semibold"
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
