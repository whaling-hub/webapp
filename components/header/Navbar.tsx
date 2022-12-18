import NextLink from "next/link";
import { Box, Button, Flex, Link, Stack, Text, useColorMode } from "@chakra-ui/react";
import UserWallet from "./UserWallet";
import { BiLinkExternal } from "react-icons/bi";
import { ThemeSwitch } from "./ThemeSwitch";
import { MAX_PAGE_WIDTH } from "../../constant";

function Navbar() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Flex
        align="center"
        justify="space-between"
        py={4}
        px={4}
        maxWidth={MAX_PAGE_WIDTH}
        margin="0 auto"
      >
        <Flex align="center">
          <Text
            fontSize="xl"
            fontWeight="bold"
            color={colorMode === "light" ? "gray.700" : "white"}
          >
            Whaling Hub
          </Text>
        </Flex>

        <Stack isInline align="center">
          <NextLink href="/bots" passHref>
            <Button variant="ghost" size="sm">
              My Bots
            </Button>
          </NextLink>
          <NextLink href="/explore" passHref>
            <Button variant="ghost" size="sm">
              Explore
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button variant="ghost" size="sm">
              About
            </Button>
          </NextLink>
          <NextLink href="https://discord.com" passHref target="_blank">
            <Button variant="ghost" size="sm" rightIcon={<BiLinkExternal />}>
              Community
            </Button>
          </NextLink>
        </Stack>

        <Flex align="center">
          {/* 这里放置辅助菜单 */}
          <ThemeSwitch />
          <UserWallet
            isConnected={true}
            wallet={{ address: "ccloky.eth" }}
            chainId={1}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
