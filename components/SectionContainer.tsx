import React, { FC, HTMLProps, PropsWithChildren } from "react";

import { Text, useColorModeValue } from "@chakra-ui/react";
import clsx from "clsx";
import Fade from "react-reveal/Fade";

interface ISectionContainer extends HTMLProps<HTMLDivElement> {
  headerMt?: string;
  headerText?: string | React.JSX.Element;
  useHeaderStyle?: boolean;
}

const SectionContainer: FC<PropsWithChildren<ISectionContainer>> = ({
  children,
  headerMt = "",
  headerText = "",
  useHeaderStyle = false,
  ...props
}) => {
  const color = useColorModeValue("secondary.light", "secondary.dark");
  return (
    <div className="w-screen min-h-[90vh] flex justify-center items-center" {...props}>
      <Fade>
        <div className="flex flex-col justify-center items-center">
          <Text
            as="h1"
            color={color}
            mt={headerMt}
            className={clsx({ "text-[2.5em] text-[#19aad5] mt-[2vh]": useHeaderStyle })}
          >
            {headerText}
          </Text>
          {children}
        </div>
      </Fade>
    </div>
  );
};

export default SectionContainer;
