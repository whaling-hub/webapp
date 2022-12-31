import { Container, ContainerProps } from "@chakra-ui/react";
import { MAX_PAGE_WIDTH } from "../constant";

type PageContainerProps = ContainerProps 
  & {
      children?: React.ReactNode;
    };
export const PageContainer = ({ children, ...props }: PageContainerProps) => {
  return (
    <Container maxWidth={MAX_PAGE_WIDTH} { ... props }>
      {children}
    </Container>
  );
};