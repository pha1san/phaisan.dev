import React, { FC, HTMLProps, ReactNode } from "react";

import clsx from "clsx";

interface ITHeaderBox extends HTMLProps<HTMLDivElement> {
  title: string;
  desc: ReactNode;
}

const HeaderBox: FC<ITHeaderBox> = ({ title, desc, className, ...props }) => {
  return (
    <div className={clsx(className, "rounded-[20px] bg-blue-300 p-6 text-white")} {...props}>
      <h2 className="mb-3 text-xl font-semibold md:text-2xl">{title}</h2>
      <p className="text-left text-base font-medium md:text-xl">{desc}</p>
    </div>
  );
};

export default HeaderBox;
