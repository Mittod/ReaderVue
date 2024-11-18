export interface IHttpSerice<T> {
  get(Id: number): T;
  getAll(): T[];

}
