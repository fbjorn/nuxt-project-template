import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { AuthAPI, UserResp } from '~/api/auth'

@Module({
  name: 'auth',
  namespaced: true,
  stateFactory: true,
})
export default class auth extends VuexModule {
  isLoggedIn = false
  user: UserResp | null = null

  @Mutation
  setUser(user: UserResp | null) {
    this.isLoggedIn = user !== null
    this.user = user || null
  }

  @Action
  async logout() {
    await AuthAPI.logout()
    this.setUser(null)
  }

  @Action({ rawError: true })
  async fetchUser(opts: { cookies?: string } = {}): Promise<boolean> {
    const { ok, data } = await AuthAPI.getMe({ cookies: opts.cookies })
    this.setUser(ok ? data : null)
    return ok
  }
}
