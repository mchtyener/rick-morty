import {Routes} from '@angular/router';

export const charactersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then((m) => m.ListComponent),
  },
  {
    path: ':id',
    loadComponent: () => import('./detail/detail.component').then((m) => m.DetailComponent),
  },

];
