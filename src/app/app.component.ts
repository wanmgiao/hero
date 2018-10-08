import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = true;
  title = 'Tour of Heroes';
  trigerNgIf(item: boolean) {
    if(item) {
      this.test = false;
    } else {
      this.test = true;
    }
    
  }
}