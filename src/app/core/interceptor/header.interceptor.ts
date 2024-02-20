import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export const headerInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

  req = req.clone({headers: req.headers.set('Accept', 'application/json')});
  req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});

  return next(req);
};

