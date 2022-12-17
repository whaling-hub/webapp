import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Logo } from "./Logo";

export const Footers = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{ base: "12", md: "16" }}
    px="4"
    maxWidth="7xl"
  >
    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://github.com/whaling-hub"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="https://twitter.com/cryptomodeert"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Whaling Hub, Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
);
