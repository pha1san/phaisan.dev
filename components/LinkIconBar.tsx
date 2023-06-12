import React, { FC } from "react";

import { Icon, Link, Stack, StackProps, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BiLink } from "react-icons/bi";
import { FaDev, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";

import { LinksType } from "@/constants/links";

import { colors } from "../theme";

const icons: { [k: string]: IconType } = {
  github: VscGithubInverted,
  linkedin: FaLinkedin,
  devpost: FaDev,
  email: MdEmail,
  document: IoMdDocument,
  youtube: FaYoutube,
  link: BiLink,
};

interface ILinkIcon {
  index: number;
  color: string;
  onHoverColor: string;
  url: string;
  label: string;
  icon: string;
}

interface ILinkIconBar extends StackProps {
  links: LinksType[];
  color?: string;
  onHoverColor?: string;
}

const LinkIcon: FC<ILinkIcon> = ({ index, color, onHoverColor, url, label, icon }) => (
  <Tooltip label={label} aria-label={`${label}-tooltip`} key={`link-${index}`}>
    <Link aria-label={`Open link to ${url}`} display="inline-block" href={url} isExternal>
      <Icon as={icons[icon]} fontSize="xl" color={color} _hover={{ color: onHoverColor }} />
    </Link>
  </Tooltip>
);

const LinkIconBar: FC<ILinkIconBar> = ({ links, color, onHoverColor, ...props }) => {
  const iconColor = useColorModeValue(colors.subtle.light, colors.subtle.dark);
  const hoverColor = useColorModeValue(colors.secondary.light, colors.secondary.dark);

  return (
    <Stack mt={4} direction="row" spacing="12px" justify="center" mb={10} {...props}>
      {links.map((link, index) => (
        <LinkIcon
          key={link.label}
          index={index}
          color={color || iconColor}
          onHoverColor={onHoverColor || hoverColor}
          {...link}
        />
      ))}
    </Stack>
  );
};

export default LinkIconBar;
