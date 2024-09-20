import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SubjectResponse } from '../../application/home/models/subject-response.model';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UrlParams } from '../models/url-params.model';

@Injectable({ providedIn: "root" })
export class SubjectService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;
  private readonly mediaApiUrl = environment.mediaApiUrl;

  get getWorksOfSubject$(): Observable<SubjectResponse> {
    const params = new UrlParams({ limit: 9 });

    return this.http.get<SubjectResponse>(`${this.apiUrl}/subjects/finance.json`, { params })
      .pipe(map(res => ({
        ...res,
        works: res.works.map(work => ({
          ...work,
          cover: work.cover_id ? `${this.mediaApiUrl}/${work.cover_id}.jpg` : ''
        }))
      })));
  }

  getWorksDetails(key: string): Observable<SubjectResponse> {
    return this.getWorksOfSubject$.pipe(
      map(res => ({...res, works: res.works.filter(work => work.key.includes(key))}))
    )
  }
}