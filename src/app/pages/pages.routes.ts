import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.routes').then((m) => m.charactersRoutes),
  },
];
