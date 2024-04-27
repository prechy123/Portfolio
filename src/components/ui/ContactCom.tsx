import { GitHub, Instagram, LinkedIn, Mail, Twitter } from "@mui/icons-material";

export default function ContactCom() {
    return (
        <div className="flex gap-2">
            <a
              href="https://github.com/prechy123"
              target="_blank"
              rel="noopener noreferrer"
              className=" pt-1 hover:pt-0"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/ayomide-bamidele-347573275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className=" pt-1 hover:pt-0"
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.instagram.com/prec__hy?igsh=dDZ0M25ybGVobXZq"
              target="_blank"
              rel="noopener noreferrer"
              className=" pt-1 hover:pt-0"
            >
              <Instagram />
            </a>
            <a
              href="https://x.com/prec__hy?t=eIsHaXmAnhusM5toM8XSPg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className=" pt-1 hover:pt-0"
            >
              <Twitter />
            </a>
            <a
              href="mailto:bamideleprecious100@gmail.com?body=Hi,%20My%20name%20is%20"
              target="_blank"
              rel="noopener noreferrer"
              className=" pt-1 hover:pt-0"
            >
              <Mail />
            </a>
          </div>
    )
}