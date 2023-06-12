import { FC } from "react";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Stack, useDisclosure } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import ColorModeButton from "@/components/ColorModeButton";
import { navBtns } from "@/constants/links";

const MenuToggle: FC<{ isOpen: boolean; onOpen: () => void }> = ({ isOpen, onOpen }) => (
  <Box display={{ base: "block", md: "none" }} pr={4}>
    <Button onClick={onOpen}>{isOpen ? <CloseIcon /> : <HamburgerIcon />}</Button>
  </Box>
);

const NavMenu: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuToggle isOpen={isOpen} onOpen={onOpen} />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody>
              <Stack alignItems="center" justifyContent="center" direction={["column"]} spacing="24px" mt="20vh">
                {navBtns.map((btn) => (
                  <Button key={btn.label} size="lg" variant="link" mb={2} onClick={onClose}>
                    <ScrollLink to={btn.label.toLowerCase()} spy smooth offset={-70} duration={500} onClick={onClose}>
                      {btn.label}
                    </ScrollLink>
                  </Button>
                ))}
                <ColorModeButton />
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NavMenu;
