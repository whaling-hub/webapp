import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    background: "#baff26",
    color: "black",
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "1 px solid #baff26",
      color: "black",
    },
    solid: {
      bg: "#baff26",
      color: "black",
    },
    ghost: {
      bg: "transparent",
      color: "black",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});
