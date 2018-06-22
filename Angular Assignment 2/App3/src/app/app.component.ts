import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`h1 
  {
    color: blue;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  `]
})
export class AppComponent {
  title = 'app';
}
