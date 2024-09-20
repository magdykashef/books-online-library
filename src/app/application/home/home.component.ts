import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SubjectResponse } from './models/subject-response.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute)
  readonly subjectResponse = signal<Partial<SubjectResponse> | null>(this.route.snapshot.data['data']['subjectRes']);
}
