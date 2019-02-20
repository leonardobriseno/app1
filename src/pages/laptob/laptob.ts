import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LapinfoPage } from '../lapinfo/lapinfo';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LaptobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laptob',
  templateUrl: 'laptob.html',
})
export class LaptobPage {
  laptobs = [];
  lapinfo = LapinfoPage;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient) {
            this.http.get('v1/klfst?&category=5020&offset=29&1lim=29&lang=es')
            .subscribe(data =>
              {
                console.log(JSON.stringify(data,null,3));
                if (data.hasOwnProperty('list_ads')){
                  this.laptobs = data
                }
              })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaptobPage');
  }
  VerLaptob(laptob) 
  {
    this.navCtrl.push(this.lapinfo, { laptob: laptob});
  }

}
