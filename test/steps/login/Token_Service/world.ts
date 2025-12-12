import { setWorldConstructor, World } from '@cucumber/cucumber'
import normalize from '../../../../src/utils/normalize'
import { ITokenService } from '../../../../src/pom/interfaces/ITokenService';

function MockedTokenService(): ITokenService {

  let tokenReqData = ""

  return {
    post: async function (input: string) {
      tokenReqData = input
    },
    getLatestResponse: async function () {
      if (tokenReqData == "token request") {
        return "token issued"
      }
      if (tokenReqData == "N/A") {
        return "N/A"
      }
      return `Invalid:
        postReqData: ${tokenReqData}
      `
    }
  };
}

export class TokenServiceWorld extends World {

  TokenService: ITokenService

  constructor(options: any) {
    super(options)
    this.TokenService = MockedTokenService()
  }

}

setWorldConstructor(TokenServiceWorld)