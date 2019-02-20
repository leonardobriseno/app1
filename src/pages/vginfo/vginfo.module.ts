import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VginfoPage } from './vginfo';

@NgModule({
  declarations: [
    VginfoPage,
  ],
  imports: [
    IonicPageModule.forChild(VginfoPage),
  ],
})
export class VginfoPageModule {}
