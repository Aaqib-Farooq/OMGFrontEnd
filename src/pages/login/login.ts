import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {TabsPage} from '../tabs/tabs'
import { RegisterPage } from '../register/register';
import {IntroPage} from '../intro/intro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  showLogin:boolean = false;
  email:string = '';
  password:string = '';
  name:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('intro-done').then(done=>{
      if(!done){
        this.storage.set('intro-done',true);
        this.navCtrl.setRoot(IntroPage);
      }
    })
    console.log('ionViewDidLoad LoginPage');
  }
  Login() {
  //   if(this.showLogin) {
  // }
  console.log('login clicked');
  this.showLogin=true;
    // this.navCtrl.push(TabsPage);
}

Signup() {
  console.log('signup clicked');
    this.navCtrl.push(RegisterPage);
    // if(!this.showLogin) {
    //   console.log('process register');
    // }
      /*
      do our own initial validation
      */
  }
}