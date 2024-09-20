import { DatePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorDetails } from '../../shared/models/author.model';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [TitleCasePipe, DatePipe],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorDetailsComponent {
  readonly authorDetails = signal<AuthorDetails>(inject(ActivatedRoute).snapshot.data['data']['authorDetails']);
}
