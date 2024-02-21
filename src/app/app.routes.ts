import {Routes} from '@angular/router';
import {pagesRoutes} from "./pages/pages.routes";

export const routes: Routes = [
  {
    path: '',
    children: pagesRoutes
  },
  {
    path: '**',
    loadComponent: () => import('./layout/error/error.component').then((m) => m.ErrorComponent),
  },

];
