import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

 import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

 
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  weather : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service : WeatherProvider, private storage : Storage) {
  }

  ionViewDidLoad() {
   
  }

  addLocation(value){
    if(value != null){
      this.service.getCurWeather(value).subscribe(res => {
        if(res != null){
          //  this.cityName = res.location.name;
           this.weather = res;

           let id = res.location.name;
            this.storage.set(id, JSON.stringify(this.weather));

            this.navCtrl.setRoot(HomePage, {
              weather_info  : this.weather
            });
       }

      });
    }
  }

}
