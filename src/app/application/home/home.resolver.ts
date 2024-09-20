import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { SubjectService } from './services/subject.service';
import { SubjectResponse } from './models/subject-response.model';

export const homeResolver: ResolveFn<Observable<{ subjectRes: SubjectResponse }>> = (route, state) => {
  const subjectService = inject(SubjectService);

  return forkJoin({ subjectRes: subjectService.getWorksOfSubject$ });
};
