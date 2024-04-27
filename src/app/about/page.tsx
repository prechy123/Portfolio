import ContactCom from "@/components/ui/ContactCom";
import { WavingHand } from "@mui/icons-material";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio - AboutPage",
  description:
    "Front-End & Back-End Expertise: Explore the web development portfolio of Bamidele Ayomide Precious, a skilled MERN Stack developer. See real-world projects and how I can craft exceptional solutions for your needs.",
};

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center relative">
      <div className="md:w-[600px] flex flex-col items-center">
        <h1 className=" text-7xl animate-pulse pb-4">
          Hello{" "}
          <span>
            <WavingHand className=" text-5xl" />
          </span>
        </h1>
        <p className=" text-justify font-bold">
          My name is{" "}
          <a
            href="https://x.com/prec__hy?t=eIsHaXmAnhusM5toM8XSPg&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className=" style-text-1 text-3xl">
              Bamidele Ayomide Precious
            </span>
          </a>
          , a self-taught full-stack developer With a strong foundation in the{" "}
          <span className="style-text-1">
            MERN Stack (MongoDB, Express.js, React.js, Node.js)
          </span>
          , I possess both front-end and back-end expertise. This enables me to
          seamlessly translate design concepts into fully functional, dynamic
          web applications.
          <br />
          <br />
          My everyday tech stack includes{" "}
          <span className="style-text-1">
            NextJs , Typescript , Tailwind , Javascript, Python e.t.c.
          </span>{" "}
          My Operating System of choice is{" "}
          <span className=" style-text-1">Ubuntu with Windows</span> and{" "}
          <span className="style-text-1">VSCODE for IDE.</span>
          <br />
          <br />
          My portfolio showcases{" "}
          <Link href="/projects" className=" underline underline-offset-4">
            <span className="style-text-1">real-world projects</span>
          </Link>{" "}
          where I have leveraged my technical proficiency to craft exceptional
          solutions tailored to meet various needs.
          <br />
          <br /> Currently, I am actively seeking{" "}
          <span className="style-text-1">
            opportunities to apply my skills and contribute to innovative
            projects.
          </span>{" "}
          Whether it is collaborating on{" "}
          <span className="style-text-1">
            {" "}
            open-source initiatives, participating in hackathons, or exploring
            career opportunities
          </span>
          , I am driven by a passion for continuous learning and growth.
          <br />
          <br /> If you are interested in exploring how I can add value to your
          projects or if you have any insights or advice to share regarding job
          search and career progression.
          <br />
          <br />{" "}
          <span className="style-text-1">
            Thank you for visiting my portfolio website.
          </span>{" "}
          I look forward to connecting with you and exploring the possibilities
          of working together to bring your ideas to life. Connect with me via
          email <a
            href="mailto:bamideleprecious100@gmail.com?body=Hi,%20My%20name%20is%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className=" style-text-1">(Bamideleprecious100@gmail.com)</span>
          </a>{" "} and whatsapp{" "}
          <a
            href="https://wa.me/qr/ROHM6JVNDCHMP1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className=" style-text-1">(08106653031)</span>
          </a>{" "}
          to chat about projects and ideas.
        </p>
        <h2 className=" text-5xl animate-pulse mt-4">Lets Connect</h2>
        <ContactCom />
      </div>
    </section>
  );
}
