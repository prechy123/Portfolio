import ProjectCard from "@/components/projectCom/ProjectCard";
import { GitHub, Launch } from "@mui/icons-material";
import { Metadata } from "next";
import { projects } from "../projectsContents";

export const metadata: Metadata = {
  title: "Bamidele - Projects",
};

export default function ProjectPage() {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center relative fade-in py-24">
      <div className="md:w-[1000px] max-w-full flex flex-col items-center px-4">
        <div>
          <h1 className="relative text-2xl pb-4 slide-up text-slate-900 font-bold">
            Projects
            <span className="absolute w-16 bg-blue-600 -top-2 h-1 left-0 rounded-lg"></span>
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
                    <h2 className="hover:font-bold transition-colors font-semibold">
                      {project.name}
                    </h2>
                  </a>
                  <div>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pr-2 link-hover inline-block text-slate-600"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={project.hostedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-hover inline-block text-slate-600"
                      aria-label={`Visit ${project.name} live site`}
                    >
                      <Launch />
                    </a>
                  </div>
                </div>
                <a href={`/project/${project._id}`}>
                  <div className="group">
                    <p className="group-hover:text-slate-600 transition-colors text-slate-700 text-sm my-2">
                      {project.description}...{" "}
                      <span className="underline font-bold group-hover:text-blue-700">
                        view more
                      </span>
                    </p>
                    <div>
                      <h2 className="pt-1 text-sm font-semibold text-slate-900">
                        Technologies Used:{" "}
                      </h2>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.stacks.map((stack) => (
                          <span
                            key={stack}
                            className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
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
