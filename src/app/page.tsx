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
            Software Engineer
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
            A Software Engineer with proven expertise spanning front-end,
            back-end, and mobile development. Certified in AWS with a strong
            foundation in building highly available systems and integrating
            advanced artificial intelligence, DevOps, and cloud computing
            technologies. Recognized for the ability to lead diverse technical
            teams, quickly adapt to modern frameworks, and deliver user-centric
            software that solves complex business challenges.
          </p>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="section-container ">
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Frontend Development
            </h3>
            <p className="text-slate-700">
              <span className="font-medium">Expert:</span> React.js, Next.js,
              Vue.js, Nuxt.js, TypeScript, JavaScript
            </p>
            <p className="text-slate-700 mt-2">
              <span className="font-medium">Styling:</span> Tailwind CSS, SCSS,
              Material-UI, Framer Motion
            </p>
          </div>

          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Mobile Development
            </h3>
            <p className="text-slate-700">
              <span className="font-medium">Platforms:</span> React Native, Expo
            </p>
            <p className="text-slate-700 mt-2">
              <span className="font-medium">Deployment:</span> iOS & Android
              deployment, App Store optimization
            </p>
          </div>

          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Backend Development
            </h3>
            <p className="text-slate-700">
              <span className="font-medium">Node.js:</span> Express.js, Nest.js,
              RESTful APIs, WebSocket
            </p>
            <p className="text-slate-700 mt-2">
              <span className="font-medium">Python:</span> Flask, Fast API
            </p>
          </div>

          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Databases & Cloud
            </h3>
            <p className="text-slate-700">
              <span className="font-medium">Databases:</span> MongoDB,
              PostgreSQL, Pinecone
            </p>
            <p className="text-slate-700 mt-2">
              <span className="font-medium">Cloud:</span> AWS (Fargate, Lambda,
              S3, EC2), Azure, Serverless Architecture
            </p>
          </div>

          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              AI & Machine Learning
            </h3>
            <p className="text-slate-700">
              Llama Models, AI Chatbots, Vector Databases, Pinecone, AI-driven
              Solutions
            </p>
          </div>

          <div className="professional-card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Tools & DevOps
            </h3>
            <p className="text-slate-700">
              Git/GitHub, VS Code, macOS & Ubuntu, CI/CD, Docker, Performance
              Optimization
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="section-container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="space-y-6">
          {/* RAI Nigeria */}
          <div className="professional-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Software Developer
                </h3>
                <p className="font-bold font-semibold">
                  Robotics and Artificial Intelligence Nigeria
                </p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                2025 - Present
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Ibadan, Nigeria</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Facilitated platform adoption, as measured by a user base of
                  over 1,000 Nigerians, by contributing to the YardCode platform
                  development.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Drove business growth, by the successful design and deployment
                  of a system for customers to chat with a business over
                  Whatsapp by utilizing llama models.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Streamlined release cycles and maintained high software
                  quality, as measured by consistent cross-functional team
                  output , by collaborating within an Agile environment to
                  design, test, and deploy code via Git and GitHub Actions CI/CD
                  pipelines.
                </span>
              </li>
            </ul>
          </div>

          {/* SolarcoprTech */}
          <div className="professional-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Software Developer
                </h3>
                <p className="font-bold font-semibold">SolarcorpTech</p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                January 2025 - Present
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Lagos, Nigeria</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Improved performance and user experience for the Circool
                  platform, as measured by faster feature load times, by
                  building and refining UI features with React Native and
                  TypeScript.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Ensured platform scalability and reliability, supporting
                  consistent system operations, by developing and maintaining
                  core modules for the Solarcorp platform using NestJS and
                  MongoDB.
                </span>
              </li>
            </ul>
          </div>

          {/* De Cloud23 */}
          <div className="professional-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Software Developer
                </h3>
                <p className="font-bold font-semibold">
                  De Cloud23 Technology Limited
                </p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                2025 - 2026
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Ibadan, Nigeria</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Expanded regional digital entertainment, successfully
                  delivering interactive content for Africans, by contributing
                  to the Games4Africa platform development.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Optimized the Zheeta project's user experience, achieving high
                  availability and cross-browser compatibility, by implementing
                  responsive UI components and delivering user-centric designs
                  with React and TailwindCSS.
                </span>
              </li>
            </ul>
          </div>

          {/* BDGroups */}
          <div className="professional-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Software Developer
                </h3>
                <p className="font-bold font-semibold">BDGroups</p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                2024 - 2026
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Abuja, Nigeria</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Delivered a complete and scalable event photo-sharing
                  application, ensuring a seamless user experience, by
                  developing the SnapUs mobile application front-end with React
                  Native.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Achieved a highly available backend infrastructure, supporting
                  concurrent user traffic, by developing the SnapUs server with
                  NestJS and hosting it on AWS using Fargate serverless
                  containers.
                </span>
              </li>
            </ul>
          </div>

          {/* Future-X */}
          <div className="professional-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Frontend Developer
                </h3>
                <p className="font-bold font-semibold">Future-X</p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                2024 - 2026
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Abuja, Nigeria</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Enhanced mobile performance, as measured by a 40% improvement,
                  by optimizing for responsive design and executing mobile-first
                  development using TypeScript.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Reduced front-end bugs, as measured by a 50% decrease and by
                  implementing robust error handling.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Improved team collaboration and code maintainability,
                  accelerating the development process, by instituting clean
                  coding practices and Git version control workflows.
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
                  AWS Certified Developer - Practitioner
                </h3>
                <p className="font-bold font-semibold mb-2">
                  Amazon Web Services (AWS)
                </p>
                <p className="text-slate-700">
                  Validated expertise in developing, deploying, and debugging
                  cloud-based applications using AWS services. Proficient in AWS
                  Lambda, S3, EC2, Fargate, RDS, and serverless architecture.
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
                <p className="font-bold font-semibold mb-2">META</p>
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
              href="mailto:bamideleayomideprecious@yahoo.com"
              className="flex items-center gap-2 text-slate-700 hover:font-bold transition-colors"
            >
              <span className="font-semibold">Email:</span>{" "}
              bamideleayomideprecious@yahoo.com
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
