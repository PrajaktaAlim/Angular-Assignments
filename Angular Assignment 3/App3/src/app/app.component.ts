import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public function fun():number
  {  
    var ans:number, n1:number, n2:number;
    n1 = 10;
    n2 = 20;
    ans = n1+n2;
    
    return ans; 
} 
}
