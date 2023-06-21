export type LinksType = {
  label: string;
  icon: string;
  url: string;
};

export const links: LinksType[] = [
  {
    label: "Github",
    icon: "mdi:github",
    url: "https://github.com/pha1san/",
  },
  {
    label: "LinkedIn",
    icon: "mdi:linkedin",
    url: "https://www.linkedin.com/in/phaisan01/",
  },
  {
    label: "Resume",
    icon: "mdi:file-document",
    url: "/resume.pdf",
  },
];

export type NavLinkType = { label: string; herf: string };

export const navLink: NavLinkType[] = [
  {
    label: "👨🏻‍💻About me",
    herf: "#about",
  },
  {
    label: "💪🏼Experience",
    herf: "#experience",
  },
  {
    label: "💻Project",
    herf: "#project",
  },
  {
    label: "📱Contact",
    herf: "#contact",
  },
];

// export default links;
