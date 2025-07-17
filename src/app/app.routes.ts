import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'single-page',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadComponent: () => import('./pages/landing-page/landing-page').then(m => m.LandingPage)
  },
  {
    path: 'single-page',
    loadComponent: () => import('./pages/single-page/single-page').then(m => m.SinglePageComponent)
  },
  {
    path: '**',
    redirectTo: 'single-page',
    pathMatch: 'full'
  }
];
