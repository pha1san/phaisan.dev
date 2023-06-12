import React from "react";

import { Box, Button, Spacer, Stack, useColorModeValue } from "@chakra-ui/react";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import Sticky from "react-stickynode";

import ColorModeButton from "@/components/ColorModeButton";
import { navBtns } from "@/constants/links";

import NavMenu from "./MobileMenu";

import { colors } from "../theme";

const Logo = () => {
  const logo = useColorModeValue("/logo.png", "/logo-dark.png");
  return (
    <Box m="2">
      <img alt="" src={logo} width="60" height="60" onClick={scroll.scrollToTop} />
    </Box>
  );
};

const NavButtons = () => {
  const btns = navBtns.map((btn) => (
    <Button key={btn.label} size="sm" variant="link">
      <ScrollLink to={btn.label.toLowerCase()} spy smooth offset={-70} duration={500}>
        {btn.label}
      </ScrollLink>
    </Button>
  ));
  return <>{btns}</>;
};

export default function Navbar() {
  const primary = useColorModeValue(colors.primary.light, colors.primary.dark);

  return (
    <Sticky enabled innerZ={99}>
      <Stack
        as="header"
        w="100%"
        direction={["row", "row", "row", "row"]}
        alignItems="center"
        justifyContent="center"
        bg={primary}
      >
        <Logo />
        <Spacer />

        <Stack
          display={{ base: "none", sm: "none", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          spacing="24px"
          direction={["column", "row", "row", "row"]}
          alignItems="center"
        >
          <NavButtons />
          <ColorModeButton mr="12px" />
        </Stack>
        <NavMenu />
      </Stack>
    </Sticky>
  );
}
