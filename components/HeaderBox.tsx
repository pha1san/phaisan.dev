import React, { FC, HTMLProps, ReactNode } from "react";

import clsx from "clsx";

interface ITHeaderBox extends Omit<HTMLProps<HTMLDivElement>, "title"> {
  title: string | ReactNode;
  desc?: ReactNode;
}

const HeaderBox: FC<ITHeaderBox> = ({ title, desc, className, ...props }) => {
  return (
    <div className={clsx(className, "rounded-[20px] bg-blue-300 p-6 text-white")} {...props}>
      {typeof title === "string" ? <h2 className="mb-3 text-xl font-semibold md:text-2xl">{title}</h2> : title}
      {desc && <p className="text-left text-base font-medium md:text-xl">{desc}</p>}{" "}
    </div>
  );
};

export default HeaderBox;
