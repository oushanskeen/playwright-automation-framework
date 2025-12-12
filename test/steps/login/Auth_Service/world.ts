import { setWorldConstructor, World } from '@cucumber/cucumber'
import normalize from '../../../../src/utils/normalize'
import { IAuthService } from '../../../../src/pom/interfaces/IAuthService';

function MockedAuthService(): IAuthService {

  let authReqData = ""

  return {
    post: async function (input: string) {
      authReqData = input
    },
    getLatestResponse: async function () {
      if (authReqData == "valid creds") {
        return "creds valid"
      }
      if (authReqData == "invalid creds") {
        return "creds invalid"
      }
      if (authReqData == "invalid request") {
        return "validation failed"
      }
      if (authReqData == "locked user creds") {
        return "user locked"
      }
      if (authReqData == "expired password creds") {
        return "password expired"
      }
      if (authReqData == "unverified creds") {
        return "unverified"
      }
      return `Invalid:
        postReqData: ${authReqData}
      `
    }
  };
}

export class AuthServiceWorld extends World {

  AuthService: IAuthService

  constructor(options: any) {
    super(options)
    this.AuthService = MockedAuthService()
  }

}

setWorldConstructor(AuthServiceWorld)