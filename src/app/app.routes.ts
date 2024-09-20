import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('./application/application.routes')
  },
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];
