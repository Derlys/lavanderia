import { Injectable } from '@angular/core'
import { WebUtilSdkService, LoginInput, RegisterInput } from '@lavanderia/web/util/sdk'

@Injectable()
export class WebAuthDataAccessService {
  constructor(public readonly data: WebUtilSdkService) {}

  me() {
    return this.data.me()
  }

  login(input: LoginInput) {
    return this.data.login({ input })
  }

  logout() {
    return this.data.logout()
  }

  register(input: RegisterInput) {
    return this.data.register({ input })
  }
}
