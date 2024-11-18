import type { IHttpSerice } from './interface.service'

export abstract class HttpService<T> implements IHttpSerice<T> {
  serverString: String
  serverPort: Number

  entryPoint: string

  get(): any {}
  getAll(): any {}
}
