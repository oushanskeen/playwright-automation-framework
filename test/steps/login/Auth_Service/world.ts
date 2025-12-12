import { setWorldConstructor, World } from '@cucumber/cucumber'
import normalize from '../../../../src/utils/normalize'

export class AuthServiceWorld extends World {

  constructor(options: any) {
    super(options)
  }

}

setWorldConstructor(AuthServiceWorld)