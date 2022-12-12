export interface ServiceResponse<T> {
  success: boolean;
  message: string;
  data: null | T;
}

export interface BotCreation {
  name: string;
  type: number;
  limit?: string;
  address?: string;
  token_address?: string;
  push_endpoint: {
    type: number;
    url: string;
    template?: string;
  };
}

export interface Bot {
  id: number;
  name: string;
  type: number;
  limit?: string;
  address?: string;
  token_address?:string;
  push_endpoint: {
    type: number;
    url: string;
  }
}

export type BotServiceReponse = ServiceResponse<Bot[]>
