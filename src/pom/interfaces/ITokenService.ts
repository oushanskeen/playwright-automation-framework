export interface ITokenService {
  post(creds: string): Promise<void>;
  getLatestResponse(): Promise<string>;
}