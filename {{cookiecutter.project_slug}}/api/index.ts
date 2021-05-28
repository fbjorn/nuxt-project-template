import settings from '~/settings'

type ResponseWrapper<T> = {
  ok: boolean
  status: number
  data: T
  error: Record<string, unknown>
}

type Resp<T> = Promise<ResponseWrapper<T>>
export type ApiData = Record<string, unknown> | Array<Record<string, unknown>>

class Api {
  apiPrefix = ''

  get baseUrl(): string {
    const suffix = '/v2'
    if (!process.server) {
      return suffix
    } else if (process.server && process.env.NODE_ENV === 'production') {
      return `${settings.prodBaseUrl}${suffix}`
    }
    return `${settings.devBaseUrl}${suffix}`
  }

  async wrapResponse<T extends ApiData>(r: Promise<Response>): Resp<T> {
    let resp
    let body

    try {
      resp = await r
    } catch (e) {
      return {
        ok: false,
        status: 500,
        data: <T>{},
        error: e,
      }
    }
    try {
      body = await resp.json()
    } catch (e) {
      return {
        ok: false,
        status: resp.status,
        data: <T>{},
        error: e,
      }
    }

    return {
      ok: resp.ok,
      status: resp.status,
      data: body,
      error: {},
    }
  }

  private static getHeaders(
    headers: Record<string, string> = {},
    rawCookies?: string
  ): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      // add cookies when fetching from server side
      ...(rawCookies ? { cookie: rawCookies } : {}),
      // add the rest headers
      ...headers,
    }
  }

  async post<T extends ApiData>(
    url: string,
    data?: Record<string, unknown>
  ): Resp<T> {
    const options: Record<string, string | Record<string, string>> = {
      method: 'POST',
      headers: Api.getHeaders(),
    }
    if (data) {
      options.body = JSON.stringify(data)
    }
    const resp = fetch(`${this.baseUrl}${this.apiPrefix}${url}`, options)
    return await this.wrapResponse(resp)
  }

  async patch<T extends ApiData>(
    url: string,
    data?: Record<string, unknown>
  ): Resp<T> {
    const options: Record<string, string | Record<string, string>> = {
      method: 'PATCH',
      headers: Api.getHeaders(),
    }
    if (data) {
      options.body = JSON.stringify(data)
    }
    const resp = fetch(`${this.baseUrl}${this.apiPrefix}${url}`, options)
    return await this.wrapResponse(resp)
  }

  async get<T extends ApiData>(opts: {
    url: string
    cookies?: string
    query?: any
  }): Resp<T> {
    const options = {
      method: 'GET',
      headers: Api.getHeaders({}, opts.cookies),
    }
    let url = `${this.baseUrl}${this.apiPrefix}${opts.url}`
    if (opts.query) {
      url += '/?'
      for (const key in opts.query) {
        url += `${key}=${opts.query[key]}&`
      }
    }
    const resp = fetch(url, options)
    return await this.wrapResponse(resp)
  }
}

export { Api, Resp }
