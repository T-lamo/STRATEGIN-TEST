export class Paginator {
  public first: number = 0;
  public rows: number = 0;
  public page: number = 0;
  public pageCount: number = 0;
  public total: number = 0;
  constructor(data: Partial<Paginator>) {
    this.first = data.first || 0;
    this.rows = data.rows || 0;
    this.page = data.page || 0;
    this.pageCount = data.pageCount || 0;
    this.total = data.total || 0;
  }
}
export interface IRessourePageable<T> {
  ressources: T;
  paginator?: Paginator | null;
}
