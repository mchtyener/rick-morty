import {Routes, withComponentInputBinding} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'characters',
    loadComponent: () => import('./pages/rick-and-mort-list/rick-and-mort-list.component').then((m) => m.RickAndMortListComponent),
  },
  {
    path: 'character/:id',
    loadComponent: () => import('./pages/rick-and-mort-detail/rick-and-mort-detail.component').then((m) => m.RickAndMortDetailComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./layout/error/error.component').then((m) => m.ErrorComponent),
  },

];
