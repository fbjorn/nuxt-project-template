import Vuex from 'vuex'
import auth from '~/store/auth'
import pets from '~/store/pets'

export function createStore() {
  return new Vuex.Store({
    modules: {
      auth,
      pets,
    },
  })
}
