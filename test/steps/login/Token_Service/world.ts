import { setWorldConstructor, World } from '@cucumber/cucumber'
import normalize from '../../../../src/utils/normalize'

export class TokenServiceWorld extends World {

  constructor(options: any) {
    super(options)
  }

}

setWorldConstructor(TokenServiceWorld)