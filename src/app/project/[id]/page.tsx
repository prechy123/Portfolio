"use client";

import { Project, projects } from "@/app/projectsContents";
const ProjectGallery = lazy(
  () => import("@/components/projectCom/ProjectGallery"),
);
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowBack } from "@mui/icons-material";

export default function ProjectPage({ params }: { params: Params }) {
  const [currentProject, setCurrentProject] = useState<Project | undefined>();
  const routeId = Number(params.id);

  useEffect(() => {
    setCurrentProject(projects.find((project) => project._id === routeId));
  }, [routeId]);

  return (
    <section className="flex flex-col items-center min-h-screen relative fade-in py-24">
      <div className="md:w-[600px] flex flex-col items-center px-4">
        <Link
          href="/projects"
          className="self-start mb-4 flex items-center gap-2 hover:font-bold transition-colors link-hover text-slate-700"
          aria-label="Go back to projects"
        >
          <ArrowBack /> Back to Projects
        </Link>

        <h1 className="text-5xl mb-2 slide-up font-bold font-bold">
          {currentProject?.name}
        </h1>

        <p
          className="text-justify slide-up text-slate-700"
          style={{ animationDelay: "0.1s" }}
        >
          {currentProject?.description}
        </p>

        <div className="slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="pt-1 font-semibold text-slate-900">
            Technologies Used:{" "}
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {currentProject?.stacks.map((stack) => (
              <span
                key={stack}
                className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

        {currentProject?.hostedLink && currentProject?.githubLink && (
          <div
            className="mt-2 slide-up flex gap-2 flex-wrap"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href={currentProject.hostedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 hover:shadow-lg"
                aria-label={`Visit ${currentProject.name} live site`}
              >
                Visit Site
              </button>
            </Link>
            <Link
              href={currentProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-white bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 hover:shadow-lg"
                aria-label={`View ${currentProject.name} on GitHub`}
              >
                Visit GitHub
              </button>
            </Link>
          </div>
        )}

        {currentProject?.images && (
          <div
            className="w-full mt-6 slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Suspense
              fallback={
                <div className="flex justify-center items-center py-12">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-slate-200 animate-spin fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="ml-3 text-slate-600">
                    Loading gallery...
                  </span>
                </div>
              }
            >
              <ProjectGallery images={currentProject?.images} />
            </Suspense>
          </div>
        )}
      </div>
    </section>
  );
}
