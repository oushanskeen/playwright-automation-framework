import { setWorldConstructor, World } from '@cucumber/cucumber'
import { ILoginPage } from "../../../../src/pom/interfaces/ILoginPage"
import normalize from '../../../../src/utils/normalize'

function MockedLoginPage(): ILoginPage {
  let login = ""
  let pwd = ""

  return {
    login: async function (input: string) {
      [login, pwd] = input.split("&").map(e => normalize(e.split("=")[1]))
    },
    submit: async function () { },
    getStatus: async function () {
      if (login == "x" && pwd == "y") {
        return "Ok"
      }
      if (login == "x" && pwd == "z") {
        return "Invalid username or password"
      }
      if (login == "null" && pwd == "null") {
        return "Username and password required"
      }
      if (login == "xLocked" && pwd == "y") {
        return "Your account is locked. Contact support."
      }
      if (login == "x" && pwd == "oldpass") {
        return "Reset Password"
      }
      if (login == "xUnverified" && pwd == "y") {
        return "Please verify your email to continue."
      }

      return `Invalid:
        login: ${login}
        pwd: ${pwd}
      `
      // }
    }
  };
}

export class UIWorld extends World {

  LoginPage: ILoginPage;

  constructor(options: any) {
    super(options)
    this.LoginPage = MockedLoginPage()
  }

}

setWorldConstructor(UIWorld)