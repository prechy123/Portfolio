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
            , a Backend Engineer with 4+ years building production APIs in
            TypeScript and NestJS, on MongoDB, PostgreSQL and Redis, deployed to
            AWS with Docker, Fargate and Terraform.
          </p>

          {/* AWS Certification Section */}
          <div
            className="my-8 p-6 bg-slate-50 rounded-lg slide-up border border-slate-200 shadow-sm"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-2xl font-bold font-bold">
                AWS Certified
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <p className="font-semibold mb-2 text-slate-800">
                  AWS Certified Cloud Practitioner, 2025
                </p>
                <p className="text-sm text-slate-700">
                  Validated knowledge of core AWS services, cloud architecture,
                  security and pricing.
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

            {/* SolarCorp */}
            <div className="mb-6 p-4 bg-white rounded border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700">Software Developer</h4>
              <p className="text-sm text-slate-600 mb-2">
                SolarCorp Technologies Limited, Lagos (Remote) | February 2026 -
                Present
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>
                  Develop and maintain core backend modules for the SolarCorp
                  platform using NestJS, Redis and MongoDB, serving 5k+ users at
                  99.99% uptime
                </li>
                <li>
                  Built active user and unique click counts for the SolarCorp
                  URL shortener on Redis HyperLogLog
                </li>
                <li>
                  Building Circool Traq, a multi-tenant asset-financing and
                  repayment platform with role-based access, audit logging, rate
                  limiting and refresh-token rotation
                </li>
                <li>
                  Provisioned AWS infrastructure as code with Terraform and
                  Docker deployment pipelines
                </li>
                <li>
                  Integrated Circool AI (LangGraph) into onboarding, doubling
                  product activation
                </li>
              </ul>
            </div>

            {/* RAI Nigeria */}
            <div className="mb-6 p-4 bg-white rounded border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700">Software Developer</h4>
              <p className="text-sm text-slate-600 mb-2">
                Robotics and Artificial Intelligence Nigeria, Ibadan (Remote) |
                February 2025 - February 2026
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>
                  Built a digital learning platform for AI and Robotics courses
                  with NestJS, MongoDB and Next.js
                </li>
                <li>
                  Built resumable multipart uploads direct to AWS S3 with retry
                  on poor networks and ClamAV malware scanning
                </li>
                <li>
                  Integrated Agora WebRTC for live classes, with adaptive
                  quality, audio-first fallback and automatic reconnection for
                  poor networks
                </li>
                <li>
                  Shipped native iOS (Swift) and Android (Kotlin) SDKs for
                  YardCode address verification, reaching 3k+ active users
                </li>
                <li>
                  Architected a WhatsApp AI agent with Llama 3 and LangChain,
                  increasing lead conversion by 300%
                </li>
              </ul>
            </div>

            {/* Freelance and Contract */}
            <div className="mb-6 p-4 bg-white rounded border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700">Backend Developer (Part-time)</h4>
              <p className="text-sm text-slate-600 mb-2">
                Freelance and Contract, Abuja (Remote) | January 2024 - January
                2026
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>
                  Designed, built and deployed backend architectures, and the
                  web and mobile apps on top of them, for 10+ client
                  organisations
                </li>
                <li>
                  De Cloud23 Technology Limited (contract): built ASP.NET (C#)
                  services for the Games4Africa and Zheeta platforms, monitored
                  with Prometheus and Grafana
                </li>
              </ul>
            </div>

            {/* Teckplus Digital Solutions */}
            <div className="mb-6 p-4 bg-white rounded border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700">Software Engineer</h4>
              <p className="text-sm text-slate-600 mb-2">
                Teckplus Digital Solutions, Abuja (Remote) | June 2022 - January
                2024
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>
                  Built the registration, examination and certification
                  workflows of the TRCN portal, with 50k+ users
                </li>
                <li>
                  Improved the portal&apos;s mobile performance by 40%
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
              TypeScript, NestJS, Node.js, MongoDB, PostgreSQL, Redis, AWS,
              Terraform, Docker, GitHub Actions, Agora WebRTC, LangChain,
              Next.js, React Native
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
              href="mailto:bamideleprecious100@gmail.com?subject=Portfolio Inquiry&body=Hi Bamidele,%0D%0A%0D%0AMy name is "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all"
            >
              <span className="style-text-1">
                bamideleprecious100@gmail.com
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
