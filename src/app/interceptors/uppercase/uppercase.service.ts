import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class UppercaseInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
          event = event.clone({body: event.body.map(user => {
            user.name = user.name.toUpperCase();
            return user;
          })});
      }
      return event;
  }));  }

  constructor() { }
}
