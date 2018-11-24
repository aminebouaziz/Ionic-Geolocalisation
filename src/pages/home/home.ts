import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Geolocation,GeolocationOptions,Geoposition } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  geoposition :Geoposition;


  constructor(private platform: Platform,
    private geolocation:Geolocation,
    public navCtrl: NavController) {

  }
 async getGeolocation(){
     await this.platform.ready();
    try{
      this.geoposition = await this.geolocation.getCurrentPosition();
    }
    catch(e){
      console.error(e);
    }
    }
}
