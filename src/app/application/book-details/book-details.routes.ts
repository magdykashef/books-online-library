import { Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details.component';
import { bookDetailsResolver } from './book-details.resolver';

const routes: Routes = [
    {
        path: '',
        component: BookDetailsComponent,
        resolve: { data: bookDetailsResolver },
    }
];

export default routes;