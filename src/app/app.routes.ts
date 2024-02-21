import { Routes } from '@angular/router';

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
