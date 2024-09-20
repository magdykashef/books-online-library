import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { homeResolver } from './home.resolver';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: { data: homeResolver },
    }
];

export default routes;