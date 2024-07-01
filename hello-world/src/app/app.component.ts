import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: '<h2>Cards</h2>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}