import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-citymanager',
  templateUrl: 'citymanager.html',
})
export class CitymanagerPage {

  locations : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage : Storage ) {
  }

  ionViewDidLoad() {
      this.storage.forEach((value, key) => {
        this.locations.push(JSON.parse(value));
      });
  }

  showItem(location){
    this.navCtrl.setRoot(HomePage, {
      weather_info : location
    });
  }

  deleteLoc(i){
    let item = this.locations[i];
    let id = item.location.name;

    this.storage.remove(id);

    this.locations.splice(i,1);
  }

}
