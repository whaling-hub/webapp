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
        px={8}
        maxWidth="7xl"
        margin="0 auto"
      >
        <Flex align="center">
          <Text fontSize="xl" fontWeight="bold" color="gray.700">
            Whaling Hub
          </Text>
        </Flex>

        {/* 这里放置导航栏菜单 */}
        <Stack isInline align="center">
          <NextLink href="/" passHref>
            <Button colorScheme="yellow" variant="ghost" size="sm">
              Menu 1
            </Button>
          </NextLink>
          <NextLink href="/bots" passHref>
            <Button colorScheme="yellow" variant="ghost" size="sm">
              Menu 2
            </Button>
          </NextLink>
          <NextLink href="/profile" passHref>
            <Button colorScheme="yellow" variant="ghost" size="sm">
              Menu 3
            </Button>
          </NextLink>
        </Stack>

        {/* 这里放置 web3 钱包登录按钮和当前钱包所在的链信息 */}
        <Flex align="center">
          {/* 这里放置辅助菜单 */}
          
          {/* 这里放置 web3 钱包登录 */}
          <Button colorScheme="yellow" variant="solid" size="sm">
            连接钱包
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
