import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoginPage} from '../login/login';
/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  navHome(){
    this.navCtrl.setRoot(LoginPage);
  }
  Login(){
    this.navCtrl.setRoot(LoginPage);
  }
  SingUp(){
    console.log("Signup Clicked");
  }
  // ngOnInit() {
  //   console.log('on init called intro page');
  //     this.storage.get('intro-done').then(done=>{
  //       if(done){
  //         this.navCtrl.setRoot(LoginPage);
  //       }
  //     })
  //   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
    
  }

}
