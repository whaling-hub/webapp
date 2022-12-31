import { Box, Button, Flex, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { FC } from 'react';

interface BotsListProps {
  data: any[];
}

const TableHeads = ["Bot Name", "Chain", "Token Name", "Address", "Running Time", "Alert Times", "Actions"];

const renderTr = (data: any) => (
  <Tr>
    <Td>{data.name}</Td>
    <Td>{data.chain}</Td>
    <Td>{data.symbol}</Td>
    <Td>{data.address}</Td>
    <Td>{data.running}</Td>
    <Td>{data.alertTimes}</Td>
    <Td>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </Td>
  </Tr>
);
const BotsList: FC<BotsListProps> = ({ data }) => {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            {TableHeads.map((name) => (
              <Th key={name}>{name}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.length < 1 && (
            <Box width="full">
              暂无机器人
            </Box>
          )}
          {data.map((item) => renderTr(item))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default BotsList;