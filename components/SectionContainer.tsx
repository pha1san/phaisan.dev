import React, { FC, HTMLProps, PropsWithChildren } from "react";

import clsx from "clsx";

// interface ISectionContainer extends HTMLProps<HTMLDivElement> {}

const SectionContainer: FC<PropsWithChildren<HTMLProps<HTMLSelectElement>>> = ({ children, className, ...props }) => {
  return (
    <section className={clsx(className, "mx-auto h-full w-full max-w-[1116px]")} {...props}>
      {children}
    </section>
  );
};

export default SectionContainer;
