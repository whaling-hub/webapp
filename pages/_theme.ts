import { extendTheme } from "@chakra-ui/react";
import { Button } from '../themes/Button';

const colors = {
  primary: "#0090d9",
  secondary: "#07bfa5",
  tertiary: "#c8d7eb",
  background: "#f5f5f5",
  text: "#333",
  link: "#0090d9",
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors,
  components: {
    Button,
  }
});

export default theme;
