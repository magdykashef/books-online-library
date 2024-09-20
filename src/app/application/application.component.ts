import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})
export class ApplicationComponent {

  constructor() { }

}
