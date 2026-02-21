import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material";

export default function ContactCom() {
  return (
    <div className="flex gap-4 justify-center items-center flex-wrap">
      <a
        href="https://github.com/prechy123"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-hover"
        aria-label="Visit my GitHub profile"
      >
        <GitHub className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/ayomide-bamidele-347573275"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-hover"
        aria-label="Connect with me on LinkedIn"
      >
        <LinkedIn className="w-6 h-6" />
      </a>
      <a
        href="mailto:bamideleayomideprecious@yahoo.com"
        className="icon-hover"
        aria-label="Send me an email"
      >
        <Mail className="w-6 h-6" />
      </a>
      <a href="tel:+2348106653031" className="icon-hover" aria-label="Call me">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
