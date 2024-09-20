import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { AuthorDetails } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAuthorDetails(authorName: string): Observable<AuthorDetails> {
    return this.http.get<AuthorDetails>(`${this.apiUrl}/search/authors.json`, { params: { q: authorName, limit: 1 } })
      .pipe(
        map(res => ({
          ...res,
          docs: res.docs.map(doc => ({
            ...doc,
            top_subjects: doc.top_subjects?.splice(0, 5)
          }))
        }))
      )
  }
}
