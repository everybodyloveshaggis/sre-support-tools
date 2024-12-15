import {Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  template: `
    <main>
    <div class="banner">
  <nav>
    <a href="/">Home</a>
    <a href="/pay-hold">Pay</a>
    <a href="/analysis">Analyse</a>
  </nav>
</div>
      <section class="content">
      <router-outlet></router-outlet>
    </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
