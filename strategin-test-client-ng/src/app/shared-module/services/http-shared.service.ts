import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpSharedService {
  options?: {
    headers?:
      | HttpHeaders
      | {
          [header: string]: string | string[];
        };
    params?:
      | HttpParams
      | {
          [param: string]:
            | string
            | number
            | boolean
            | ReadonlyArray<string | number | boolean>;
        };
    responseType?: 'json';
  } = {
    params: {}, // Your params object if any
    responseType: 'json',
  };
  constructor(private http: HttpClient) {}

  query = <T, U>(
    url: string,
    body?: U,
    params?:
      | HttpParams
      | {
          [param: string]:
            | string
            | number
            | boolean
            | ReadonlyArray<string | number | boolean>;
        }
  ) => ({
    post: <T>() => {
      return this.http.post<T>(url, body, this.options);
    },
    get: () => {
      return this.http.get<T>(url, this.options);
    },
  });
}
