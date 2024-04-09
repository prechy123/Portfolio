import TypingAnimation from "@/components/ui/TypingAnimation";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Mouse,
  Twitter,
  WavingHand,
} from "@mui/icons-material";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="container md:py-24 flex flex-col items-center h-screen justify-center md:justify-normal ">
        <div className="text-3xl md:w-[600px]">
          <h1 className=" text-7xl animate-pulse pb-4">
            Hello{" "}
            <span>
              <WavingHand className=" text-5xl" />
            </span>
          </h1>
          <h3>
            My name is <span className=" ">Bamidele Ayomide Precious</span>
          </h3>
          <h3>
            I am a <TypingAnimation />{" "}
          </h3>
          <Link
            href="/about"
            className="learn-more-btn my-4 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent"
          >
            Learn More
          </Link>
          <div className="flex gap-2">
            <a
              href="https://github.com/prechy123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/ayomide-bamidele-347573275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.instagram.com/prec__hy?igsh=dDZ0M25ybGVobXZq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://x.com/prec__hy?t=eIsHaXmAnhusM5toM8XSPg&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="mailto:bamideleprecious100@gmail.com?body=Hi,%20My%20name%20is%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>
          </div>
          <div className=" absolute bottom-24 md:bottom-10 left-1/2 right-1/2 flex flex-col items-center ">
            <Mouse className=" animate-bounce" />
            <span className="text-sm text-nowrap">Scroll Down</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center h-screen justify-center relative">
        <div className="md:w-[600px]">
          <h1 className=" relative">
            Technologies
            <span className="absolute w-16 bg-gradient-to-r from-blue-500 to-pink-500 -top-2 h-1 left-0 rounded-lg"></span>
          </h1>
          <div className=" flex gap-4 flex-col md:flex-row">
            <div className="technology-card">
              <h2>Front-End</h2>
              <p>
                Experience with: <br />
                1. NextJs and ReactJs with Typescipt,
                <br />
                2. Framer-Motion, <br />
                3. Material UI, and <br />
                4. TailwindCSS.
              </p>
            </div>
            <div className="technology-card">
              <h2>Back-End</h2>
              <p>
                Experience with: <br />
                1. NodeJs, <br />
                2. ExpressJs, <br />
                3. MongoDB, <br />
                4. Flask, <br />
                5. JWT, and
                <br />
                5. Passport.
                <br />
              </p>
            </div>
          </div>
          <div className=" absolute bottom-2 md:bottom-10 left-1/2 right-1/2 flex flex-col items-center ">
            <Mouse className=" animate-bounce" />
            <span className="text-sm text-nowrap">
              Check out projects built with this technologies
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center h-screen justify-center relative">
        <div className="md:w-[600px]">
          <h1 className=" relative">
            Projects
            <span className="absolute w-16 bg-gradient-to-r from-blue-500 to-pink-500 -top-2 h-1 left-0 rounded-lg"></span>
          </h1>
        </div>
      </section>
    </>
  );
}
