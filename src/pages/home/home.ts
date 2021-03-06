import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
mascotas=[];
infopage = InfoPage
  constructor(public navCtrl: NavController,
              public http: HttpClient) {
    this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es')
    .subscribe( data => 
        {
        console.log(JSON.stringify(data, null, 3));
        if (data.hasOwnProperty('list_ads')){
          this.mascotas = data['list_ads'];
        }
      },
      error => {
        console.log(JSON.stringify(error));
      });
  }
  VerMascota(mascota)
  {
    this.navCtrl.push(this.infopage, {mascota: mascota});
  }

}
