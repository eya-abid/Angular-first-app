import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgColor = 'red';
  title = 'Touta';
  show = false;
  changeStatus(){
    this.show = !this.show;
  }
}
