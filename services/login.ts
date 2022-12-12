import { ethers } from "ethers";

export const verifyMessage = async (message: string, signerAddress: string, signature: string) => {
    const recoveredAddress = ethers.utils.verifyMessage(message, signature);
    return recoveredAddress === signerAddress;
};

