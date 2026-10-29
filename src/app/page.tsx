import ContactCom from "@/components/ui/ContactCom";
import Image from "next/image";
import { projects } from "./projectsContents";

export default function Home() {
  // Featured projects (top 5 by impact)
  const featuredProjects = projects.slice(0, 5);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero / Summary Section */}
      <section id="summary" className="section-container pt-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Bamidele Ayomide Precious
          </h1>
          <p className="text-xl md:text-2xl font-bold font-semibold mb-4">
            Backend Engineer
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
            Backend Engineer with 4+ years building production APIs for
            consumer apps in TypeScript and NestJS, on MongoDB, PostgreSQL and
            Redis, deployed to AWS with Docker, Fargate and Terraform. Currently
            runs a platform serving 5k+ users at 99.99% uptime. Shipped
            real-time audio and video (Agora WebRTC) built for poor networks,
            resumable S3 media uploads, and native Swift and Kotlin SDKs. Has
            delivered backend architectures for 10+ client organisations.
          </p>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="section-container ">
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Backend Development
            </h3>
            <p className="text-slate-700">
              <span className="font-medium">Languages:</span> TypeScript,
              JavaScript, Java, Python, SQL, C#, C++
            </p>
            <p className="text-slate-700 mt-2">
              <span className="font-medium">Frameworks:</span> NestJS, Node.js,
              Express, FastAPI, Django, Flask, ASP.NET
            </p>
            <p className="text-slate-700 mt-2">
              <span className="font-medium">APIs:</span> REST, WebSockets,
              Webhooks, JWT Auth, RBAC, Rate Limiting
            </p>
          </div>

          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Databases & Real-Time
            </h3>
            <p className="text-slate-700">
              <span className="font-medium">Databases:</span> MongoDB,
              PostgreSQL, Redis, Mongoose, Prisma
            </p>
            <p className="text-slate-700 mt-2">
              <span className="font-medium">Real-Time:</span> WebRTC, Agora
              RTC, Agora Signalling, Agora Interactive Whiteboard
            </p>
          </div>

          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Cloud & DevOps
            </h3>
            <p className="text-slate-700">
              <span className="font-medium">Cloud:</span> AWS (S3, EC2, ECS,
              Fargate), Azure
            </p>
            <p className="text-slate-700 mt-2">
              <span className="font-medium">DevOps:</span> Terraform, Docker,
              CI/CD, GitHub Actions, Git, Prometheus, Grafana
            </p>
          </div>

          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Testing & API Tools
            </h3>
            <p className="text-slate-700">
              Jest, Unit Tests, End-to-End (E2E) Tests, Postman, Swagger
              (OpenAPI), Thunder Client
            </p>
          </div>

          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              AI
            </h3>
            <p className="text-slate-700">
              LangChain, LangGraph, AI Agents, RAG, Pinecone
            </p>
          </div>

          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Frontend & Mobile
            </h3>
            <p className="text-slate-700">
              React Native, Expo, React, Next.js
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="section-container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="space-y-6">
          {/* SolarCorp */}
          <div className="professional-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Software Developer
                </h3>
                <p className="font-bold font-semibold">SolarCorp Technologies Limited</p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                February 2026 - Present
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Lagos, Nigeria (Remote)</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Develop and maintain core backend modules for the SolarCorp
                  platform using NestJS, Redis and MongoDB, serving 5k+ users at
                  99.99% uptime.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Built daily and monthly active user counts, and unique click
                  counts for the SolarCorp URL shortener, on Redis HyperLogLog,
                  giving near-exact unique counts in fixed, minimal memory.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Building Circool Traq, a multi-tenant asset-financing and
                  repayment platform for lenders and installation partners
                  (NestJS, MongoDB, Next.js), with role-based access across
                  lender, partner and admin workspaces, audit logging, rate
                  limiting and JWT sessions with refresh-token rotation and
                  reuse detection.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Implemented Docker containerisation and AWS deployment
                  pipelines, with infrastructure provisioned as code using
                  Terraform, cutting environment configuration errors and
                  shortening the sprint-to-production cycle.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Integrated Circool AI (LangGraph) into the onboarding
                  pipeline, achieving a 2x increase in product activation and
                  reducing manual support tickets.
                </span>
              </li>
            </ul>
          </div>

          {/* RAI Nigeria */}
          <div className="professional-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Software Developer
                </h3>
                <p className="font-bold font-semibold">Robotics and Artificial Intelligence Nigeria (RAIN)</p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                February 2025 - February 2026
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Ibadan, Nigeria (Remote)</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Built a digital learning platform for AI and Robotics courses
                  with a NestJS and MongoDB API and a Next.js web app, covering
                  programmes, courses, cohorts, assessments and a community
                  space.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Built resumable file uploads direct to AWS S3 (multipart,
                  pre-signed URLs) with automatic retry on poor networks, resume
                  after page reload and server-side verification of received
                  parts, plus ClamAV malware scanning before any file is saved.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Integrated Agora WebRTC for live classes with screen sharing,
                  an interactive whiteboard, in-class chat, raised hands,
                  captions and attendance tracking.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Engineered poor-network handling for live classes: adaptive
                  video quality driven by real-time network reports, audio
                  prioritised over video, audio-only and low-resolution stream
                  fallback, automatic reconnection and a data-saver mode.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  For YardCode, an address-verification service, designed and
                  shipped native iOS (Swift) and Android (Kotlin) SDKs that let
                  third-party apps run real-time address validation, and grew
                  adoption to 3k+ active users.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Architected a WhatsApp-integrated AI agent with Llama 3 and
                  LangChain, automating customer engagement and increasing lead
                  conversion by 300%.
                </span>
              </li>
            </ul>
          </div>

          {/* Freelance and Contract */}
          <div className="professional-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Backend Developer (Part-time)
                </h3>
                <p className="font-bold font-semibold">Freelance and Contract</p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                January 2024 - January 2026
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Abuja, Nigeria (Remote)</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Designed, built and deployed custom backend architectures, and
                  the web and mobile apps on top of them, for 10+ client
                  organisations, from data model and API design through
                  deployment.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  De Cloud23 Technology Limited (contract, February 2025 -
                  January 2026): built and maintained ASP.NET (C#) backend
                  services and APIs for the Games4Africa and Zheeta platforms,
                  refactored legacy codebases into modular architectures, and
                  monitored the services with Prometheus and Grafana dashboards.
                </span>
              </li>
            </ul>
          </div>

          {/* Teckplus Digital Solutions */}
          <div className="professional-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Software Engineer
                </h3>
                <p className="font-bold font-semibold">Teckplus Digital Solutions</p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                June 2022 - January 2024
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Abuja, Nigeria (Remote)</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Built the registration, examination and certification
                  workflows of the Teachers Registration Council of Nigeria
                  (TRCN) portal, with 50k+ users, and improved its mobile
                  performance by 40%.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section-container ">
        <h2 className="section-title">Featured Projects</h2>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <div key={project._id} className="professional-card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-900">
                  {project.name}
                </h3>
                <div className="flex gap-2">
                  {project.hostedLink && project.hostedLink !== "/" && (
                    <a
                      href={project.hostedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.githubLink && project.githubLink !== "/" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 hover:font-bold hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((stack, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-600">
            View all {projects.length} projects on{" "}
            <a
              href="https://github.com/prechy123"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline font-semibold"
            >
              GitHub →
            </a>
          </p>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="section-container">
        <h2 className="section-title">Certifications</h2>

        <div className="space-y-6">
          {/* AWS Certification */}
          <div className="professional-card">
            <div className="flex items-start gap-4">
              <Image
                src="/image/certificate/aws-certificate-badge.png"
                alt="AWS Certification Badge"
                width={80}
                height={80}
                className="object-contain flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="font-bold font-semibold mb-2">
                  Amazon Web Services (AWS), 2025
                </p>
                <p className="text-slate-700">
                  Validated knowledge of core AWS services, cloud architecture,
                  security and pricing. Applied in production with S3, EC2, ECS,
                  Fargate and Terraform-provisioned infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="professional-card">
            <div className="flex items-start gap-4">
              <Image
                src="/image/certificate/metaxrain.jpeg"
                alt="META Certification"
                width={80}
                height={80}
                className="object-contain flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  AI AGENTS AND AGENTIC AI SYSTEMS DEVELOPMENT
                </h3>
                <p className="font-bold font-semibold mb-2">META, 2026</p>
                <p className="text-slate-700">
                  Mastered the development of Agentic AI systems and
                  Retrieval-Augmented Generation (RAG) using LangChain, PyTorch,
                  and Llama, while implementing advanced prompt engineering
                  frameworks and model fine-tuning techniques (LoRA/QLoRA) to
                  build scalable, tool-integrated applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container ">
        <h2 className="section-title">Lets Connect</h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-slate-700 mb-6">
            I am always open to discussing new opportunities, collaborations, or
            interesting projects. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a
              href="mailto:bamideleprecious100@gmail.com"
              className="flex items-center gap-2 text-slate-700 hover:font-bold transition-colors"
            >
              <span className="font-semibold">Email:</span>{" "}
              bamideleprecious100@gmail.com
            </a>
            <span className="hidden sm:block text-slate-300">|</span>
            <a
              href="tel:+2348106653031"
              className="flex items-center gap-2 text-slate-700 hover:font-bold transition-colors"
            >
              <span className="font-semibold">Phone:</span> +234 810 665 3031
            </a>
          </div>

          <ContactCom />

          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-slate-600">
              Based in Nigeria | Available for remote opportunities worldwide
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
