import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitymanagerPage } from './citymanager';

@NgModule({
  declarations: [
    CitymanagerPage,
  ],
  imports: [
    IonicPageModule.forChild(CitymanagerPage),
  ],
})
export class CitymanagerPageModule {}
