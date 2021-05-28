import { Api, Resp } from '~/api'

export type UserResp = {
  id: number
  username: string
}

class AuthApi extends Api {
  apiPrefix = '/auth'

  async logout() {
    return await this.post('/logout')
  }

  async getMe(opts: { cookies?: string } = {}): Resp<UserResp> {
    return await this.get({ url: '/me', cookies: opts.cookies })
  }
}

const AuthAPI = new AuthApi()
export { AuthAPI }
