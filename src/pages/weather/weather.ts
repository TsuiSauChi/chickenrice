import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from '../../app/services/weather.service';
import {ChickenRiceService} from '../../app/services/chickenrice.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  city: String;
  state: String;
  value: boolean
  weather: any;
  searchStr:String;
  results: any;

  constructor(public navCtrl: NavController, private weatherService:WeatherService, private chickenriceService:ChickenRiceService) {
    this.city = 'Singapore';
    this.state = 'Singapore';
  }

  ngOnInit(){
    this.weatherService.getWeather(this.city, this.state)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

  getQuery(){
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        console.log(res);
        //this.results = res.RESULTS;
      });
  }

Test(value){
  if(value == "On"){
    return value == "On"
  }
  else if (value == "Off"){
    return value == "Off"
  }
}

}
