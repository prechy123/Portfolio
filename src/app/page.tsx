import ContactCom from "@/components/ui/ContactCom";
import TypingAnimation from "@/components/ui/TypingAnimation";
import Link from "next/link";
import Image from "next/image";
import { Code, CloudQueue, Devices } from "@mui/icons-material";

export default function Home() {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center fade-in">
      <div className="text-center md:w-[600px] px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 slide-up text-slate-900 dark:text-slate-100">
          Bamidele Ayomide Precious
        </h1>

        <div className="mb-6 slide-up" style={{ animationDelay: "0.1s" }}>
          <TypingAnimation />
        </div>

        <p
          className="text-lg sm:text-xl mb-8 text-slate-700 dark:text-slate-300 slide-up leading-relaxed"
          style={{ animationDelay: "0.3s" }}
        >
          Professional Full Stack Developer with 5+ years of experience building
          scalable web and mobile applications. Specialized in mobile apps, web
          apps, backend systems, and cloud deployments.
        </p>

        {/* Tech Stack Highlights */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/60 dark:from-indigo-950/50 dark:to-slate-900 rounded-lg hover:scale-105 transition-transform border border-indigo-200 dark:border-indigo-800 shadow-sm">
            <Code className="text-4xl text-indigo-600 dark:text-indigo-400 mb-2" />
            <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-slate-100">
              Full Stack
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              React(NextJS), React-Native(Expo), Vue(NuxtJS), Node.js(NestJS),
              python(Flask)
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/60 dark:from-indigo-950/50 dark:to-slate-900 rounded-lg hover:scale-105 transition-transform border border-indigo-200 dark:border-indigo-800 shadow-sm">
            <CloudQueue className="text-4xl text-pink-600 dark:text-pink-400 mb-2" />
            <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-slate-100">
              Cloud
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              AWS Services & Deployment, Azure Deployment
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/60 dark:from-indigo-950/50 dark:to-slate-900 rounded-lg hover:scale-105 transition-transform border border-indigo-200 dark:border-indigo-800 shadow-sm">
            <Devices className="text-4xl text-purple-600 dark:text-purple-400 mb-2" />
            <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-slate-100">
              Responsive
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Mobile-First Design
            </p>
          </div>
        </div>

        <div
          className="flex justify-center mb-6 slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/60 dark:from-indigo-950/50 dark:to-slate-900 rounded-lg hover:scale-105 transition-transform border border-indigo-200 dark:border-indigo-800 shadow-sm">
            <Image
              src="/image/certificate/aws-certificate-badge.png"
              alt="AWS Certified Developer"
              width={80}
              height={80}
              className="object-contain"
            />
            <p className="text-xs mt-2 font-semibold text-slate-700 dark:text-slate-300">
              AWS Certified
            </p>
          </div>
        </div>

        <div
          className="flex gap-4 justify-center mb-8 flex-wrap slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Link href="/about">
            <button
              type="button"
              className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 hover:bg-indigo-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-200/50 dark:focus:ring-pink-300/50 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              aria-label="Learn more about me"
            >
              About Me
            </button>
          </Link>
          <Link href="/projects">
            <button
              type="button"
              className="text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 hover:bg-indigo-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-200/50 dark:focus:ring-pink-300/50 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              aria-label="View my projects"
            >
              View Projects
            </button>
          </Link>
        </div>

        <div className="slide-up" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <div className=" flex justify-center ">
            <ContactCom />
          </div>
        </div>
      </div>
    </section>
  );
}
