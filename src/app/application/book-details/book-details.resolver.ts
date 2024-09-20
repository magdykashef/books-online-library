import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { SubjectService } from '../../shared/services/subject.service';

export const bookDetailsResolver: ResolveFn<Observable<{ bookDetails: any }>> = (route, state) => {
  return forkJoin({ bookDetails: inject(SubjectService).getWorksDetails(route.queryParams['workKey']) });
};
