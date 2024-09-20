import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorDetailsComponent {

}
