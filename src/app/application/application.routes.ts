import { Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
    {
        path: '',
        component: ApplicationComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./home/home-routes'),
            },
            {
                path: 'book-details',
                loadChildren: () => import('./book-details/book-details.routes'),
            },
        ]
    },
];

export default routes;