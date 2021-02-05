import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() public LoggedIn:boolean

@Output() greetEvent = new EventEmitter()

name="Godly"

  constructor() { }

  ngOnInit(): void {


  }

callGreet(){
this.greetEvent.emit(this.name)
}

}
