import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLogin = true

  //interpolation

  nameInter = "Godly varghese"


  greet(name:string){
    alert('Hello ' + name)
  }
}
