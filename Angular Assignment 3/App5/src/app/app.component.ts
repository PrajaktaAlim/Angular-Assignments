import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  str = 'Marvellous Infosystems';

 public function btnClk():void
  {
    this.str = 'Button clicked!';  
  }
}
