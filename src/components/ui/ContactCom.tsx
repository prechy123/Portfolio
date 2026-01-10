import {
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Twitter,
} from "@mui/icons-material";

export default function ContactCom() {
  return (
    <div className="flex gap-2 slide-up" style={{ animationDelay: "0.2s" }}>
      <a
        href="https://github.com/prechy123"
        target="_blank"
        rel="noopener noreferrer"
        className="pt-1 hover:pt-0 link-hover transition-all"
        aria-label="Visit my GitHub profile"
      >
        <GitHub />
      </a>
      <a
        href="https://www.linkedin.com/in/ayomide-bamidele-347573275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="pt-1 hover:pt-0 link-hover transition-all"
        aria-label="Connect with me on LinkedIn"
      >
        <LinkedIn />
      </a>
      <a
        href="https://www.instagram.com/qvkdpwbr?igsh=dDZ0M25ybGVobXZq&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="pt-1 hover:pt-0 link-hover transition-all"
        aria-label="Follow me on Instagram"
      >
        <Instagram />
      </a>
      <a
        href="mailto:bamideleayomideprecious@yahoo.com?body=Hi,%20My%20name%20is%20"
        target="_blank"
        rel="noopener noreferrer"
        className="pt-1 hover:pt-0 link-hover transition-all"
        aria-label="Send me an email"
      >
        <Mail />
      </a>
    </div>
  );
}
