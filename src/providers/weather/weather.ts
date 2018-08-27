import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
// import { Observable } from 'rxjs/Observacble';
import 'rxjs/add/observable/forkJoin'; 
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {

  apiKey : string = 'f00bd595caeb4d35aad34950183006';
  constructor(public http: Http, private storage : Storage) {
  
  }

  getCurWeatherGeo(lat : Number, lon: Number){
    // let current = this.http.get('http://api.apixu.com/v1/current.json?key='+ this.apiKey +'&q='+lat+','+lon).map(res => res.json());
    

   return this.http.get('http://api.apixu.com/v1/forecast.json?key='+ this.apiKey + '&q='+lat+','+lon+'&days=7' ).map(res => res.json());

    // return Observable.forkJoin([current , forecast]);
  }

  getCurWeather(loc){
    return this.http.get('http://api.apixu.com/v1/forecast.json?key='+ this.apiKey +'&q='+ loc+'&days=7' ).map(res => res.json());
    
  }

  setStorage(key,value){
    this.storage.set(key,JSON.stringify(value));
  }

  getStorage(key){
    return this.storage.get(key);
  }

}
