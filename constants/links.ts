export type LinksType = {
  label: string;
  icon: string;
  url: string;
};

export const links: LinksType[] = [
  {
    label: "Github",
    icon: "github",
    url: "https://github.com/pha1san/",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/phaisan01/",
  },
  {
    label: "Resume",
    icon: "document",
    url: "/resume.pdf",
  },
];

export type NavLinkType = { label: string; herf?: string };

export const navBtns: NavLinkType[] = [
  {
    label: "About",
  },
  {
    label: "Experience",
  },
  {
    label: "Projects",
  },
  {
    label: "Contact",
  },
];

// export default links;
