import { Middleware } from '@nuxt/types'
import { getModule } from 'vuex-module-decorators'
import AuthModule from '~/store/auth'

const authenticated: Middleware = async ({ req, store, redirect }) => {
  const authModule = getModule(AuthModule, store)
  let isLoggedIn = store.state.auth.isLoggedIn
  if (!isLoggedIn) {
    let cookies = 'empty'
    if (req && req.headers && req.headers.cookie) {
      cookies = req.headers.cookie
    }
    isLoggedIn = await authModule.fetchUser({ cookies })
  }
  if (!isLoggedIn) {
    redirect('/auth')
  }
}

export default authenticated
