import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UppercaseInterceptor } from './uppercase/uppercase.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: UppercaseInterceptor, multi: true},
]
