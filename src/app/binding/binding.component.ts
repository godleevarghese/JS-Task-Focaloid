import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public test = '';

  constructor() { }



  ngOnInit(): void {
  }


  change(){

    // alert("ngModelChanges working...")
    console.log("ngmodel")
  }

  test1(){

    // alert("ngModels working...")
    console.log("change")
  }

 
}
