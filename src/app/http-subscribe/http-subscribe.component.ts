import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http-subscribe',
  templateUrl: './http-subscribe.component.html',
  styleUrls: ['./http-subscribe.component.css']
})
export class HttpSubscribeComponent implements OnInit {

  public datas = []
  constructor(private httpService : HttpService) { }

  ngOnInit(): void {

    this.httpService.getData()
    .subscribe((data)=>{
      this.datas=data
    })

  }

}
