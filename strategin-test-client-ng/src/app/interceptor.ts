import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environments/environments';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const getToken = () => {
      const token = localStorage.getItem('strategin_token') ?? null;
      if (token) {
        return JSON.parse(token).data.token;
      }

      return '';
    };
    const apiReq = request.clone({
      url: `${environment.apiUrl}/${request.url}`,
      setHeaders: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return next.handle(apiReq);
  }
}
