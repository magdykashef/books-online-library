import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent {
  readonly bookDetails = signal<any>(inject(ActivatedRoute).snapshot.data['data']['bookDetails']);
}
