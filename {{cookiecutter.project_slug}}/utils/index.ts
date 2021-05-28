import { createMetaTags } from '~/utils/metatags'

const getQueryParams = (): { [key: string]: string } => {
  const params = new URLSearchParams(window.location.search)
  const res: { [key: string]: string } = {}
  params.forEach((value, key) => {
    res[key] = value
  })
  return res
}

const getCookie = (name: string, rawCookies?: string): string => {
  let cookieValue = ''
  rawCookies = rawCookies || ''
  if (!rawCookies && !process.server) {
    rawCookies = document.cookie
  }
  if (rawCookies !== '') {
    const cookies = rawCookies.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
        break
      }
    }
  }
  return cookieValue
}

export { getQueryParams, getCookie, createMetaTags }
