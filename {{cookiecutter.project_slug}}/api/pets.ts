import { Api, Resp } from '~/api'

export type Pet = {
  id: number
  name: string
  status: string
}

class PetsApi extends Api {
  apiPrefix = '/pet'

  async listPets(): Resp<Array<Pet>> {
    return await this.get({
      url: '/findByStatus',
      query: { status: 'available' },
    })
  }
}

const PetsAPI = new PetsApi()
export { PetsAPI }
