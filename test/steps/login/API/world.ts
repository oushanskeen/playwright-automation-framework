import { setWorldConstructor, World } from '@cucumber/cucumber'
import normalize from '../../../../src/utils/normalize'
import { ILoginAPI } from "../../../../src/pom/interfaces/ILoginAPI"

function MockedLoginAPI(): ILoginAPI {

  let postReqData = ""

  return {
    post: async function (input: string) {
      postReqData = input.split(" ")[1]
    },
    getLatestResponse: async function () {
      if (postReqData == "/login?login=x&pass=y") {
        return "200 OK + token"
      }
      if (postReqData == "/login?login=x&pass=z") {
        return "401 Unauthorized"
      }
      if (postReqData == "/login?login=xLocked&pass=y") {
        return "423/403 Forbidden"
      }
      if (postReqData == "/login?login=x&pass=oldpass") {
        return "403 Forbidden"
      }
      if (postReqData == "/login?login=null&pass=null") {
        return "400 Bad Request"
      }
      if (postReqData == "/login?ogin=xUnverified&pass=y") {
        return "403 Forbidden"
      }
      return `Invalid:
        postReqData: ${postReqData}
      `
    }
  };
}

export class APIWorld extends World {

  LoginAPI: ILoginAPI;

  constructor(options: any) {
    super(options)
    this.LoginAPI = MockedLoginAPI()
  }

}

setWorldConstructor(APIWorld)