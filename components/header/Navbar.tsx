import NextLink from "next/link";
import { Box, Button, Flex, Link, Stack, Text, useColorMode } from "@chakra-ui/react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={colorMode === "dark" ? "gray.800" : "white"}>
      <Flex
        align="center"
        justify="space-between"
        py={4}
        px={4}
        maxWidth="7xl"
        margin="0 auto"
      >
        <Flex align="center">
          <Text fontSize="xl" fontWeight="bold" color="gray.700">
            Whaling Hub
          </Text>
        </Flex>

        <Stack isInline align="center">
          <NextLink href="/bots" passHref>
            <Button colorScheme="yellow" variant="ghost" size="sm">
              My Bots
            </Button>
          </NextLink>
          <NextLink href="/profile" passHref>
            <Button colorScheme="yellow" variant="ghost" size="sm">
              About
            </Button>
          </NextLink>
          <NextLink href="/bots" passHref>
            <Button colorScheme="yellow" variant="ghost" size="sm">
              Community
            </Button>
          </NextLink>
        </Stack>

        <Flex align="center">
          {/* 这里放置辅助菜单 */}

          <Button colorScheme="lime" variant="solid" size="sm">
            Connect Wallet
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
