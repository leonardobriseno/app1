import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VginfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vginfo',
  templateUrl: 'vginfo.html',
})
export class VginfoPage {
vg = {};
imgs = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
              this.vg  = this.navParams.get ('vg');
              if (this.vg.ad.hasOwnProperty('images')) {
                this.imgs = this.vg.ad.images;
              }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VginfoPage');
  }

}
