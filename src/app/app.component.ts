import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//city:string;
  constructor(private httpservice:Http){
this.httpservice=httpservice;
  }
  onButtonClick(cityName:string){
    console.log(cityName);
    const url=`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`;
    this.httpservice.get(url)
//console.log(this.city);

.subscribe((rsp)=>{
  console.log(rsp.json());
})

  }
  
}
