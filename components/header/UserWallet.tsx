import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import styled from "@emotion/styled/types/base";
import { FC } from "react";
import { SUPPORTED_CHAIN } from "../../constant";

interface UserWalletProps {
  isConnected: boolean;
  wallet: {
    address?: string;
    ens?: string;
  }
  chainId: number;
}

interface CurrentChainProps {
  chainId: number;
}

const showErrorNetwork = () => {
  return <div></div>
}

const showSupportedNetwork = () => {
  return <div></div>
}

const WalletInfo = styled(Box)`

`;

const CurrentChain: FC<CurrentChainProps> = ({ chainId }) => {
  const isSupportChainId = Object.keys(SUPPORTED_CHAIN).includes(chainId.toString());
  return (
    <Box>{isSupportChainId ? showSupportedNetwork() : showErrorNetwork()}</Box>
  );
};

const UserWallet: FC<UserWalletProps> = ({
  isConnected,
  wallet,
  chainId,
}) => {
  return (
    <Flex>
      <CurrentChain chainId={chainId} />
      {isConnected ? (
        <Menu>
          <MenuButton as={WalletInfo}>{ wallet.address }</MenuButton>
          <MenuList>
            <MenuItem>断开连接</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button colorScheme="yellow" variant="solid" size="sm">
          连接钱包
        </Button>
      )}
    </Flex>
  );
};

export default UserWallet;
