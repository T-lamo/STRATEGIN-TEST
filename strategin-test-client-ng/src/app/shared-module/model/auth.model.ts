import { ApiCallState } from './enum';

export interface ILogin {
  username: string;
  password: string;
  email?: string;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  password?: string;
}

export interface ILoginResponse {
  jwt: string;
  user: IUser;
}

export interface IApiCall<T> {
  response: T | null;
  state: ApiCallState;
}
