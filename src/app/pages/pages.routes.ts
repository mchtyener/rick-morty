import { Routes } from '@angular/router';
import { authGuard } from "../core/guards/auth.guard";

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'characters',
    canActivate: [authGuard],
    loadChildren: () => import('./characters/characters.routes').then((m) => m.charactersRoutes),
  },
];
