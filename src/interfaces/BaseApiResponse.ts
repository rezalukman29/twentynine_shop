import {AxiosError} from 'axios';

export interface APIResponse<T> {
  products?: T;
  total: number;
  skip: number;
  limit: number;
  message: string;
  error?: boolean;
}

export type APIError = AxiosError<APIResponse<never>>;
