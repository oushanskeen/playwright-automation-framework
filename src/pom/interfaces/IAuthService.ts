export interface IAuthService {
  post(creds: string): Promise<void>;
  getLatestResponse(): Promise<string>;
}