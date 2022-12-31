import { Box, Button, Container } from "@chakra-ui/react";
import BotsList from "../../components/bots/list";
import { PageContainer } from "../../components/pages";

export default function BotsIndex() {
  return (
    <PageContainer px={8}>
      <Box mb={6}>
        <Button size='sm' colorScheme='blue'>Create Bot</Button>
      </Box>
      <BotsList data={[]} />
    </PageContainer>
  );
};
