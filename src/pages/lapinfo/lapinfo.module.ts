import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LapinfoPage } from './lapinfo';

@NgModule({
  declarations: [
    LapinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(LapinfoPage),
  ],
})
export class LapinfoPageModule {}
