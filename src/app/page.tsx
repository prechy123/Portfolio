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
            Computer Engineer
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/image/certificate/aws-certificate-badge.png"
              alt="AWS Certified Developer"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A computer engineering graduate of Elizade University, Ilara-Mokin,
            Ondo State.<br />I am a Software Developer with over five years of
            experience in frontend, backend, mobile, and cloud development. My
            core skills include ReactJS, VueJS, NextJS, NuxtJS, Python, Flask,
            NodeJS, NestJS, React Native, Expo, Azure, and AWS.
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
                  Contributed to YardCode platform development, a system adopted
                  by over 1,000 Nigerians.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Participated in the <strong>MetaXRain program</strong>,
                  leveraging Llama AI models to drive business growth and
                  innovation
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Designed and deployed an{" "}
                  <strong>AI-driven intrusion detection system</strong>{" "}
                  enhancing security infrastructure
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Collaborated with cross-functional teams on software design,
                  testing, and deployment using Agile methodologies
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
                  Built and improved features for the Circool platform, focused
                  on performance and user experience.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Developed and maintained core modules for the Solarcorp
                  platform, supporting scalability and reliability.
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
                  Developed <strong>Games for Africa platform</strong>, creating
                  engaging multiplayer games tailored for African audiences
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Contributed to <strong>Zheeta project</strong>, implementing
                  responsive UI components and optimizing user experience across
                  devices
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Delivered user-centric designs with focus on{" "}
                  <strong>
                    accessibility, performance optimization, and cross-browser
                    compatibility
                  </strong>
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
                  Developed <strong>SnapUs complete application</strong>{" "}
                  (mobile, web, and backend) ensuring excellent user experience
                  and scalability
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Built and deployed{" "}
                  <strong>SnapUs server on AWS using Fargate</strong> serverless
                  architecture, achieving high availability and cost efficiency
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Implemented cloud-native solutions for optimal performance and
                  cost efficiency using AWS services (S3, Lambda, RDS)
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
                  Enhanced mobile performance by{" "}
                  <strong className="font-bold">40%</strong> through
                  optimization for responsive design and mobile-first
                  development
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Reduced front-end bugs by{" "}
                  <strong className="font-bold">50%</strong> by implementing
                  robust Nuxt.js error handling and comprehensive testing
                  strategies
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Improved code maintainability and team collaboration through
                  clean coding practices and thorough documentation
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
        <h2 className="section-title">Education & Certifications</h2>

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

          {/* Education */}
          <div className="professional-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Bachelor of Engineering in Computer Engineering
                </h3>
                <p className="font-bold font-semibold">Elizade University</p>
              </div>
              <span className="text-sm text-slate-600 font-medium">
                2019 - 2024
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">Ilara-Mokin, Nigeria</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Graduated with <strong>Upper Honours</strong>
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Led development of high-performance projects, including
                  diverse full-stack applications gaining{" "}
                  <strong className="font-bold">
                    over 1,000+ active users
                  </strong>
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 font-bold">•</span>
                <span>
                  Collaborated in Hackathons, developing a{" "}
                  <strong>peer-to-peer lending platform</strong> with credit
                  scoring and dispute resolution
                </span>
              </li>
            </ul>
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
