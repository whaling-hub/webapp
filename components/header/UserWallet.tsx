import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { BiChevronDown } from "react-icons/bi";
import { SUPPORTED_CHAIN } from "../../constant";
import { EthereumIcon } from '../../components/icons/chainIcons'
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

const WalletInfo = styled(Button)({
});

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
    <Flex ml="2">
      <CurrentChain chainId={chainId} />
      {isConnected ? (
        <Menu size="sm" autoSelect={false}>
          <MenuButton
            as={WalletInfo}
            size="sm"
            variant="outline"
            leftIcon={<EthereumIcon boxSize={5} />}
            rightIcon={<BiChevronDown />}
          >
            {wallet.address}
          </MenuButton>
          <MenuList>
            <MenuItem>断开连接</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button colorScheme="blue" variant="solid" size="sm">
          Connect Wallet
        </Button>
      )}
    </Flex>
  );
};

export default UserWallet;
