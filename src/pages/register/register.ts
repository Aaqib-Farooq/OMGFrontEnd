import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Gender} from '../../shared/SharedFile';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  enterUserName:boolean=false;
  emailId:string='';
  password:string='';
  gender:Gender=Gender.Other;
  name:string='';
  phoneNumber:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  logForm(){
    console.log(this.emailId+" "+this.password);
    this.enterUserName=true;
    console.log("logform called");
  }

  createUser(){
    console.log(this.emailId+" "+this.password+" "+this.name+" "+this.phoneNumber);
  }
}
