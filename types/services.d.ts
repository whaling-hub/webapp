interface ServiceResponse<T> {
  success: boolean;
  message: string;
  data: null | T;
}

interface Bot {
  id: number;
  name: string;
  type: number;
  limit?: string;
  address?: string;
  token_address?:string;
}

type BotServiceReponse = ServiceResponse<Bot[]>
