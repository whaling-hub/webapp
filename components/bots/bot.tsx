import { Avatar, Button, ButtonGroup, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { FC } from "react";
import { Bot } from "../../types/services";


interface BotCardProps {
  bot: Bot;
  network: string;
  onEdit: (botId: string | number) => void;
  onDelete: (botId: string | number) => void;
}

const BotCardWrap = styled(Stack)({
  border: '1px solid brand'
});

export const BotCard: FC<BotCardProps> = ({ bot, network, onEdit, onDelete }) => {
  return (
    <BotCardWrap direction="row">
      <Stack direction="row">
        <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
        <Stack direction="column">
          <Heading as="h5" size="sm">
            监控二号鲸鱼
          </Heading>
          <Text fontSize="sm">运行时长：</Text>
        </Stack>
      </Stack>
      <Text>类型</Text>
      <ButtonGroup size="sm" variant="solid">
        <IconButton aria-label="Edit Bot" icon={<BiEditAlt />} />
        <IconButton aria-label="Delete Bot" icon={<BiTrash />} />
      </ButtonGroup>
    </BotCardWrap>
  );
};

