export enum WhalingRuleTypes {
  TOKEN_TRANSFER,
  NFT_TRANSFER,
  TOKEN_TRANSACTION,
  NFT_TRANSACTION,
}

export enum ClientTypes {
  WEBHOOK,
}

export interface WhalingRule {
  type: WhalingRuleTypes;
  content:
    | WhalingTokenTransferRule
    | WhalingTokenTransactionRule
    | WhalingNFTTransferRule
    | WhalingNFTTransactionRule;

  template?: string;
  clientType: ClientTypes;
  client: WebhookClient;
}

export interface WebhookClient {
  url: string;
}

export interface WhalingTokenTransferRule {
  address: string;
}

export interface WhalingTokenTransactionRule {
  // token contract address
  address: string;
  // the limit of emit warning
  limit: string;
}

export interface WhalingNFTTransferRule {
  // token contract address
  address: string;
}

export interface WhalingNFTTransactionRule {
  // token contract address
  address: string;
  // the limit of emit warning
  limit: string;
}
