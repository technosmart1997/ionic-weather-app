import { Component,OnInit } from '@angular/core';
import { NavController ,NavParams, LoadingController, Loading} from 'ionic-angular';

// import { Geolocation } from '@ionic-native/geolocation';
import { WeatherProvider } from '../../providers/weather/weather';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  weather : any;
  lat : Number;
  lon : Number;
  cityname : string;
  bgUrl :string ='assets/imgs/weather/default.jpg';
loader;

  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private navParams : NavParams, private service: WeatherProvider, private storage : Storage) {
  

    this.weather = this.navParams.get('weather_info');
    // console.log(this.weather);
    if(this.weather){
      this.cityname = this.weather.location.name;
      let code  = this.weather.current.condition.code;
      // console.log(code);
      this.getBgImage(code);
    }    
  }


  ionViewWillEnter(){

      if(this.cityname != null){
        this.service.getCurWeather(this.cityname).subscribe((res) =>{
          // console.log(res);
          if(res){
            this.weather = res;
            this.cityname = this.weather.location.name;

            // Dismiss Loader
            // this.loader.dismiss;

            let id = res.location.name;
            
            // console.log('Storage updated');
            this.storage.set(id, JSON.stringify(this.weather));

            let code  = this.weather.current.condition.code;
            // console.log(code);
             this.getBgImage(code);
          }
        })
      }
  }

  ngOnInit() {
    
  }

  getDay(no){
    let timeStamp = no;
    let Day = new Date(timeStamp * 1000);

    let days = ['Sunday','Monday' , 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let dayofWeek = days[Day.getDay()];

    return dayofWeek;
}

searchPage(){
  this.navCtrl.push("SearchPage");
}


getBgImage(id){
  if(id != null){
    if(id == 1009 || id == 1006 || id == 1003 ){
      this.bgUrl = 'assets/imgs/weather/clouds.jpg';
    }else if(id == 1000){
      this.bgUrl = 'assets/imgs/weather/clear.jpg';
    }else if(id == 1063 || id == 1072 || id == 1150 || id == 1153 || id == 1171 || id == 1087 || id == 1150 || id == 1180 || id == 1183 || id == 1186  ||id == 1189 || id == 1192 || id == 1195 || id == 1240 || id == 1243 || id == 1273 || id == 1240 || id == 1276  ){
      this.bgUrl = 'assets/imgs/weather/rain.jpg';
    }else if(id == 1009 || id == 1087 ) {
      this.bgUrl = 'assets/imgs/weather/thunder.jpg';
    }else if(id == 1030 ) {
      this.bgUrl = 'assets/imgs/weather/mist.jpg';
    }else if(id == 1282 || id == 1279 || id == 1264 || id == 1261 || id == 1258 || id == 1255 || id == 1237 || id == 1225 || id == 1222 || id == 1219  || id == 1216 || id == 1213 || id == 1210 || id == 1114 || id == 1066 || id == 1135 || id == 1147 || id == 1117  ){
      this.bgUrl = 'assets/imgs/weather/rain.jpg';
    }
  }
}

}
