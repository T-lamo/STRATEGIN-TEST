import { IApiCall } from './auth.model';
import { ApiCallState } from './enum';
import { Paginator } from './table';

export class ApiCall<T> implements IApiCall<T> {
  public response: T | null = null;
  public state: ApiCallState = ApiCallState.Initial;
  public paginator?: Paginator;

  constructor(data?: Partial<ApiCall<T>>) {
    if (data) {
      this.response = data.response!;
      this.state = data.state || ApiCallState.Initial;
      this.paginator = data.paginator || new Paginator({ first: 0, rows: 9 });
    }
  }
}
