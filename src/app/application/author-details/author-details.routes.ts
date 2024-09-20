import { Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author-details.component';
import { authorDetailsResolver } from './author-details.resolver';

const routes: Routes = [
    {
        path: '',
        component: AuthorDetailsComponent,
        resolve: { data: authorDetailsResolver },
    }
];

export default routes;