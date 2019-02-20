import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LapinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lapinfo',
  templateUrl: 'lapinfo.html',
})
export class LapinfoPage {
laptob = {};
imgs = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
                this.laptob = this.navParams.get('laptob');

              if (this.laptob.ad.hasOwnProperty('images')) 
              {
                this.imgs = this.laptob.ad.images;
              }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LapinfoPage');
  }

}
