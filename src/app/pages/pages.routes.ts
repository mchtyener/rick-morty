import {Routes} from '@angular/router';

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'characters',
    loadComponent: () => import('./rick-and-mort-list/rick-and-mort-list.component').then((m) => m.RickAndMortListComponent),
  },
  {
    path: 'character/:id',
    loadComponent: () => import('./rick-and-mort-detail/rick-and-mort-detail.component').then((m) => m.RickAndMortDetailComponent),
  },

];
