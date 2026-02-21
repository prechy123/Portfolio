import ContactCom from "@/components/ui/ContactCom";
import {
  WavingHand,
  WorkOutline,
  School,
  EmojiEvents,
} from "@mui/icons-material";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bamidele - About",
};

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center relative fade-in py-24">
      <div className="md:w-[1000px] max-w-full flex flex-col items-center px-4">
        <h1 className="text-7xl animate-pulse pb-4 slide-up text-slate-900">
          Hello{" "}
          <span className="inline-block hover:animate-[wave_0.5s_ease-in-out]">
            <WavingHand className="text-5xl" />
          </span>
        </h1>

        <div
          className="text-justify slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="font-bold mb-6 text-slate-800">
            My name is{" "}
            <a
              href="https://x.com/prec__hy?t=eIsHaXmAnhusM5toM8XSPg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all"
            >
              <span className="style-text-1 text-3xl">
                Bamidele Ayomide Precious
              </span>
            </a>
            , a passionate Full Stack Developer with professional experience in
            building scalable applications.
          </p>

          {/* AWS Certification Section */}
          <div
            className="my-8 p-6 bg-slate-50 rounded-lg slide-up border border-slate-200 shadow-sm"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-2xl font-bold font-bold">
                AWS Certified Developer
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <p className="font-semibold mb-2 text-slate-800">
                  AWS Certified Developer - Practitioner
                </p>
                <p className="text-sm text-slate-700">
                  Validated expertise in developing, deploying, and debugging
                  cloud-based applications using AWS services.
                </p>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/image/certificate/aws-certificate-badge.png"
                  alt="AWS Certification Badge"
                  width={100}
                  height={100}
                  className="object-contain hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="my-8 slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-3xl font-bold font-bold">
                Professional Experience
              </h3>
            </div>

            {/* RAI Nigeria - Mobile App Engineer */}
            <div className="mb-6 p-4 bg-white rounded border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700">App Developer</h4>
              <p className="text-sm text-slate-600 mb-2">
                Robotics and Artificial Intelligence Nigeria, Ibadan | 2025 -
                2026
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>
                  Developed YardCode mobile application using Expo (React
                  Native), a system adopted by over 1,000 Nigerians
                </li>
                <li>
                  Participated in the MetaXRain program, using llama models to
                  drive business growth
                </li>
                <li>
                  Designed and deployed an AI-driven intrusion detection system
                </li>
                <li>
                  Collaborated with a cross-functional team on software design,
                  testing, and deployment
                </li>
              </ul>
            </div>

            {/* De Cloud23 Technology Limited */}
            <div className="mb-6 p-4 bg-white rounded border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700">
                Full-Stack Developer
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                De Cloud23 Technology Limited, Ibadan | 2025 - 2026
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>
                  Developed Games for Africa platform, creating engaging games
                  for Africans
                </li>
                <li>
                  Contributed to Zheeta project, implementing responsive UI
                  components and optimizing user experience
                </li>
                <li>
                  Delivered user-centric designs with focus on accessibility,
                  performance, and cross-browser compatibility
                </li>
              </ul>
            </div>

            {/* BDGroups */}
            <div className="mb-6 p-4 bg-white rounded border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700">
                Full-Stack Developer
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                BDGroups, Abuja | 2024 - 2026
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>
                  Developed SnapUs complete application ensuring excellent user
                  experience and scalability
                </li>
                <li>
                  Built and deployed SnapUs server on AWS using Fargate
                  serverless architecture
                </li>
                <li>
                  Implemented cloud-native solutions for optimal performance and
                  cost efficiency
                </li>
              </ul>
            </div>

            {/* Future-X */}
            <div className="mb-6 p-4 bg-white rounded border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700">
                Frontend Developer
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                Future-X, Abuja | 2024 - 2026
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>
                  Enhanced mobile performance by 40% through optimization for
                  responsive design and mobile-first development
                </li>
                <li>
                  Reduced front-end bugs by 50% by implementing robust Nuxt.js
                  error handling and testing
                </li>
                <li>
                  Improved code maintainability and collaboration through clean
                  coding practices
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="my-8 slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-3xl font-bold font-bold">Education</h3>
            </div>
            <div className="p-4 bg-white rounded border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700">
                B.Eng. Computer Engineering
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                Elizade University, Ilara-Mokin | 2019 - 2024
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>
                  Led the development of high-performance projects, including
                  diverse full-stack applications gaining over 1,000+ active
                  users
                </li>
                <li>
                  Collaborated on a Hackathon, developing a peer-to-peer lending
                  platform.
                </li>
                <li>Graduated with an Upper Honours.</li>
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <p className="font-bold my-6 text-slate-800">
            My everyday tech stack includes{" "}
            <span className="style-text-1">
              Next.js, Nuxt.js, Nest.js, React-Native, Expo, React.js, Vue.js,
              TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB,
              PostgreSQL, Python, Flask, AWS, Azure
            </span>
            . I work primarily on{" "}
            <span className="style-text-1">macOS & Ubuntu</span> and{" "}
            <span className="style-text-1">VS Code as my IDE of choice</span>.
          </p>

          <p className="font-bold my-6 text-slate-800">
            My portfolio showcases{" "}
            <Link
              href="/projects"
              className="underline underline-offset-4 hover:font-bold transition-colors"
            >
              <span className="style-text-1">real-world projects</span>
            </Link>{" "}
            where I have leveraged my technical skills to build innovative
            solutions that solve real problems.
          </p>

          <p className="font-bold my-6 text-slate-800">
            I am passionate about{" "}
            <span className="style-text-1">
              continuous learning, cloud technologies, and building scalable
              applications
            </span>
            . Whether collaborating on{" "}
            <span className="style-text-1">
              open-source projects, participating in hackathons, or exploring
              new career opportunities
            </span>
            , I am always eager to take on new challenges and grow as a
            developer.
          </p>

          <p className="font-bold my-6 text-slate-800">
            <span className="style-text-1">
              Thank you for visiting my portfolio!
            </span>{" "}
            I would love to connect and explore opportunities to collaborate on
            exciting projects. Reach out via email at{" "}
            <a
              href="mailto:bamideleayomideprecious@yahoo.com?subject=Portfolio Inquiry&body=Hi Bamidele,%0D%0A%0D%0AMy name is "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all"
            >
              <span className="style-text-1">
                bamideleayomideprecious@yahoo.com
              </span>
            </a>{" "}
            or WhatsApp at{" "}
            <a
              href="https://wa.me/2348106653031?text=Hi%20Bamidele,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all"
            >
              <span className="style-text-1">+234 810 665 3031</span>
            </a>
            .
          </p>
        </div>

        <h2
          className="text-5xl animate-pulse mt-8 slide-up text-slate-800"
          style={{ animationDelay: "0.5s" }}
        >
          Let&apos;s Connect
        </h2>
        <div className="slide-up" style={{ animationDelay: "0.6s" }}>
          <ContactCom />
        </div>
      </div>
    </section>
  );
}
