import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, Router, RouterModule, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {headerInterceptor} from "./core/interceptor/header.interceptor";
import {errorInterceptor} from "./core/interceptor/error.interceptor";
import {provideHttpClient, withInterceptors} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideHttpClient(withInterceptors([errorInterceptor, headerInterceptor]))]
};
