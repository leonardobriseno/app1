import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideogamesPage } from './videogames';

@NgModule({
  declarations: [
    VideogamesPage,
  ],
  imports: [
    IonicPageModule.forChild(VideogamesPage),
  ],
})
export class VideogamesPageModule {}
