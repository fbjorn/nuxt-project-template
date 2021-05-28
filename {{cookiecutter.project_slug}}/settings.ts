class AppSettings {
  frontendPort = '4000'
  localBackendUrl = 'https://petstore.swagger.io'

  devBaseUrl = `http://localhost:${this.frontendPort}`
  prodBaseUrl = `https://my.website.domain`
}

const conf = new AppSettings()
export default conf
