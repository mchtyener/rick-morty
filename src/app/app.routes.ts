import {Routes} from '@angular/router';
import {pagesRoutes} from "./pages/pages.routes";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.routes').then((m) => m.pagesRoutes),
  },
  {
    path: '**',
    loadComponent: () => import('./layout/error/error.component').then((m) => m.ErrorComponent),
  },

];
