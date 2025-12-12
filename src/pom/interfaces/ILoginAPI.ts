export interface ILoginAPI {
  post(reqData:string): Promise<void>;
  getLatestResponse(): Promise<string>;
}