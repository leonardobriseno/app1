import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VginfoPage } from '../vginfo/vginfo';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the VideogamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videogames',
  templateUrl: 'videogames.html',
})
export class VideogamesPage {
videogames = [];
vginfo = VginfoPage;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient) {
                this.http.get('v1/klfst?&category=5020&offset=29&1lim=29&lang=es')
            .subscribe(data =>
              {
                console.log(JSON.stringify(data,null,3));
                if (data.hasOwnProperty('list_ads')) {
                  this.videogames = data
             }
          },
          error => {
            console.log(JSON.stringify(error));
          });
        }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideogamesPage');
  }
  VerVG (videogames)
  {
    this.navCtrl.push(this.vgpage, {videogames: videogames});
  }

}
