import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SubjectResponse } from '../models/subject-response.model';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class SubjectService {
  private readonly http = inject(HttpClient);

  get getWorksOfSubject$(): Observable<SubjectResponse> {
    return this.http.get<SubjectResponse>(`https://openlibrary.org/subjects/finance.json`)
      .pipe(map(res => ({
        ...res,
        works: res.works.slice(0, 9).map(work => ({
          ...work,
          cover: work.cover_id ? `https://covers.openlibrary.org/b/id/${work.cover_id}.jpg` : ''
        }))
      })));
  }
}