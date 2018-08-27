import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { Storage } from '@ionic/storage'; 
import { HomePage } from '../pages/home/home';
import { CitymanagerPage } from '../pages/citymanager/citymanager';
import { WeatherProvider } from '../providers/weather/weather';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  weather : any;
  


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,private storage : Storage,private geo : Geolocation, public statusBar: StatusBar, public splashScreen: SplashScreen, private service : WeatherProvider) {
    this.initializeApp();
  
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'City Manager' , component: CitymanagerPage },
      // { tistle: 'List', component: ListPage }
    ];

  }

  ngOnInit(){
    this.geo.getCurrentPosition().then(res => {
      console.log(res);
      this.service.getCurWeatherGeo(res.coords.latitude, res.coords.longitude).subscribe(res => {
        console.log(res);
       if(res != null){
          //  this.cityName = res.location.name;
           this.weather = res;

           let id = res.location.name;
            this.storage.set(id, JSON.stringify(this.weather));

            this.nav.setRoot(HomePage, {
              weather_info  : this.weather
            });
      }
      });
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }

 
}
