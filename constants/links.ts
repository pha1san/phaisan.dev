const Github = "https://github.com/pha1san/";
const LinkedIn = "https://linkedin.com/in/phaisan01/";
const Email = "p.uyarnontruk@gmail.com";
const Mobile = "+64 22 495 6916";

const EmailURL = "mailto: " + Email;
const MobileURL = "tel: " + Mobile;

export type LinksType = {
  label: string;
  icon: string;
  url?: string;
  text?: string;
};

export const links: LinksType[] = [
  {
    label: "Github",
    icon: "mdi:github",
    url: Github,
  },
  {
    label: "LinkedIn",
    icon: "mdi:linkedin",
    url: LinkedIn,
  },
  {
    label: "Resume",
    icon: "mdi:file-document",
    url: "/resume.pdf",
  },
];

export const contacts: LinksType[] = [
  {
    label: "Email",
    icon: "ic:baseline-email",
    url: EmailURL,
    text: Email,
  },
  {
    label: "Github",
    icon: "mdi:github",
    url: Github,
  },
  {
    label: "Call",
    icon: "ic:round-call",
    // url: MobileURL,
    text: Mobile,
  },
  {
    label: "LinkedIn",
    icon: "mdi:linkedin",
    url: LinkedIn,
  },
];

export type NavLinkType = { label: string; herf: string };

export const navLink: NavLinkType[] = [
  {
    label: "About me👨🏻‍💻",
    herf: "#about",
  },
  {
    label: "💪🏼Experience",
    herf: "#experience",
  },
  {
    label: "Project💻",
    herf: "#project",
  },
  {
    label: "Contact📱",
    herf: "#contact",
  },
];

// export default links;
