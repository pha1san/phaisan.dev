import { FC, HTMLProps, PropsWithChildren } from "react";

import clsx from "clsx";
import Link from "next/link";

import { links } from "@/constants/links";

import { Icon } from "./Icons";

const SocialLinkButton: FC<PropsWithChildren<HTMLProps<HTMLDivElement>>> = ({ className, ...prop }) => {
  return (
    <div className={clsx("flex gap-4", className)} {...prop}>
      {links.map((link) => (
        <Link href={link.url} key={link.label} target="_blank">
          <Icon icon={link.icon} width={32} height={32} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinkButton;
