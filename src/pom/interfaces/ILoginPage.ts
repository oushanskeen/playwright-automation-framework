export interface ILoginPage {
  login(creds:string): Promise<void>;
  submit(): Promise<void>;
  getStatus(): Promise<string>;
}