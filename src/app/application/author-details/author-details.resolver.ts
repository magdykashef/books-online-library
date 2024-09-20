import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { AuthorService } from '../../shared/services/author.service';

export const authorDetailsResolver: ResolveFn<Observable<{ authorDetails: any}>> = (route, state) => {
  const authorService = inject(AuthorService);
  return forkJoin({authorDetails: authorService.getAuthorDetails(route.queryParams['authorName'])});
};
