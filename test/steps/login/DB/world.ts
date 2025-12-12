import { setWorldConstructor, World } from '@cucumber/cucumber'
import normalize from '../../../../src/utils/normalize'
import { IDBService } from '../../../../src/pom/interfaces/IDBService';

function MockedDBServce(): IDBService {

  let dbReqData = ""

  return {
    get: async function (input: string) {
      dbReqData = input
    },
    getLatestResponse: async function () {
      if (dbReqData == "user valid creds") {
        return "user record"
      }
      if (dbReqData == "creds invalid") {
        return "user invalid status"
      }
      if (dbReqData == "user creds invalid") {
        return "user invalid status"
      }
      if (dbReqData == "N/A") {
        return "N/A"
      }
      if (dbReqData == "locked user valid creds") {
        return "user locked status"
      }
      if (dbReqData == "user creds with expired password") {
        return "user pass expired status"
      }
      if (dbReqData == "unverified user creds") {
        return "unverified status"
      }

      return `Invalid:
        dbReqData: ${dbReqData}
      `
    }
  };
}

export class DBWorld extends World {

  DBService: IDBService

  constructor(options: any) {
    super(options)
    this.DBService = MockedDBServce()
  }

}

setWorldConstructor(DBWorld)