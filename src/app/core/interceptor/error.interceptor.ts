import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

  return next(req).pipe(
    catchError((response: any) => {
      if (response instanceof HttpErrorResponse || (response.status === 403 || response.status === 500)) {

      }
      return throwError(response);
    }));
};
