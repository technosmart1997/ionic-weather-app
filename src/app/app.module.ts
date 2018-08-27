import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
 import { SearchPageModule } from '../pages/search/search.module';

import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
 import { CitymanagerPageModule } from '../pages/citymanager/citymanager.module';

//  import { SearchPage } from '../pages/search/search';
//  import { CitymanagerPage } from '../pages/citymanager/citymanager';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
    // SearchPage,
    // CitymanagerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
     SearchPageModule,
     CitymanagerPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
    // SearchPage,
    // CitymanagerPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider
  ]
})
export class AppModule {}
