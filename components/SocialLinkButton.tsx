import { FC, HTMLProps, PropsWithChildren } from "react";

import { Icon } from "@iconify/react";
import clsx from "clsx";
import Link from "next/link";

const SocialLinkButton: FC<PropsWithChildren<HTMLProps<HTMLDivElement>>> = ({ className, ...prop }) => {
  return (
    <div className={clsx("flex gap-4", className)}>
      <Icon icon="mdi:linkedin" width={32} height={32} />
      <Icon icon="mdi:github" width={32} height={32} />
      <Icon icon="mdi:file-document" width={32} height={32} />
    </div>
  );
};

export default SocialLinkButton;
