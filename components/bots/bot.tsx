import { Avatar, Box, Button, ButtonGroup, Flex, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { BiBot, BiEditAlt, BiTimeFive, BiTrash } from "react-icons/bi";
import { FC } from "react";
import { Bot } from "../../types/services";
import { EthereumIcon } from "../icons/chainIcons";


interface BotCardProps {
  bot: Bot;
  network: string;
  pushTimes: Record<string | number, number>;
  onEdit: (botId: string | number) => void;
  onDelete: (botId: string | number) => void;
}

const BotCardWrap = styled(Stack)({
  border: '1px solid brand',
});

export const BotCard: FC<BotCardProps> = ({
  bot,
  network,
  pushTimes,
  onEdit,
  onDelete,
}) => {
  return (
    <BotCardWrap direction="row" px="2">
      <Flex direction="column" justify="space-between">
        <EthereumIcon boxSize={24} />
        <ButtonGroup size="sm" variant="solid">
          <IconButton
            aria-label="Edit Bot"
            icon={<BiEditAlt />}
            onClick={() => onEdit(bot.id)}
          />
          <IconButton
            aria-label="Delete Bot"
            icon={<BiTrash />}
            onClick={() => onDelete(bot.id)}
          />
        </ButtonGroup>
      </Flex>
      <Stack direction="column">
        <Heading as="h5" size="sm" textOverflow="ellipsis">
          {bot.name}
        </Heading>
        <Text fontSize="sm">{bot.type}</Text>
      </Stack>
      <Stack direction="column" justify="space-between">
        <Stack>
          <BiTimeFive size={14} />
          <Text size="sm">运行时间：</Text>
        </Stack>
        <Stack>
          <BiBot size={14} />
          <Text fontSize="sm">推送次数: { pushTimes[bot.id] } </Text>
        </Stack>
      </Stack>
    </BotCardWrap>
  );
};

