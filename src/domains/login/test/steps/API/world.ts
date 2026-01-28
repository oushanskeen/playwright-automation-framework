import { setWorldConstructor, World } from '@cucumber/cucumber'
import { ILoginAPI } from "../../../src/ui/pom/interfaces/ILoginAPI"
import LoginAPIService from '../../../src/api/LoginAPIService';

export class APIWorld extends World {

  LoginAPI: ILoginAPI;

  constructor(options: any) {
    super(options)
    this.LoginAPI = LoginAPIService()
  }

}

setWorldConstructor(APIWorld)