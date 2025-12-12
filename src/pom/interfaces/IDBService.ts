export interface IDBService {
  get(creds: string): Promise<void>;
  getLatestResponse(): Promise<string>;
}