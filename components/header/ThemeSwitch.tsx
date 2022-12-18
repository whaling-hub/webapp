import { IconButton, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeSwitch: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      size="sm"
      variant="outline"
      aria-label="theme toggle"
      icon={colorMode === "light" ? <BiMoon /> : <BiSun />}
      onClick={toggleColorMode}
    />
  );
}
