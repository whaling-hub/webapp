import {
  Box,
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";
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
        <div></div>
      ) : (
        <Button colorScheme="yellow" variant="solid" size="sm">
          连接钱包
        </Button>
      )}
    </Flex>
  );
};

export default UserWallet;
