import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { Pet, PetsAPI } from '~/api/pets'

@Module({
  name: 'pets',
  namespaced: true,
  stateFactory: true,
})
export default class pets extends VuexModule {
  pets: Array<Pet> = []

  @Mutation
  setPets(pets: Array<Pet>) {
    this.pets = pets
  }

  @Action({ rawError: true })
  async fetchPets() {
    const { ok, data } = await PetsAPI.listPets()
    if (ok) {
      this.setPets(data)
    }
  }
}
