import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent {

}
