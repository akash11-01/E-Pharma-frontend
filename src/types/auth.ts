export interface IRegisterResponse {
  user: { name: string; email: string };
}

export interface IRegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface ILoginResponse {
  user: { name: string; email: string };
  accessToken: string;
  refreshToken: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
