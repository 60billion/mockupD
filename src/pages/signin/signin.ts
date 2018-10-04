import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class Signin {

  name:string="";
  email:string="";
  password:string="";
  passwordCheck:string="";

  
  names;
  emails;
  passwords;
  passwordChecks;


  agree:boolean=false;
  submit:boolean=false;
  

  @ViewChild('input') myInput ;

  constructor(public navCtrl: NavController) {
    
  }

  showSubmit(){
    if(this.names&&this.emails&&this.passwords&&this.passwordChecks){
      this.submit=true;
    }else{
      this.submit=false;
    }
  }

  showAgreement(){

  }

  modalPop(){
    this.navCtrl.pop();
  }

  ionViewDidLoad(){
    
  }

  ionViewDidEnter(){
    setTimeout(()=>{
      this.myInput.setFocus();
    },150)
  }

  checkName(){
    if(this.name){
      this.names = true;
    }else{
      this.names = false;
    }
    this.showSubmit();
  }

  checkEmail(){
    let check = this.emailFormat(this.email);
    if(check){
      this.emails = true;
    }else{
      this.emails = false;
    }
    this.showSubmit();
  }

  checkPassword(){
    if(this.passwordCheck == this.password && this.password.length>5){
      this.passwords = true;
      this.passwordChecks = true;
      if(this.password != this.passwordCheck){
        this.passwordChecks = false;
      }
    }else if(this.password.length>5){
      this.passwords = true;
      if(this.password != this.passwordCheck){
        this.passwordChecks = false;
      }
    }else{
      this.passwords = false;
      this.passwordChecks = false;
    }
    this.showSubmit();
  }

  checkPasswordCheck(){
    if(this.passwordCheck == this.password&& this.passwordCheck.length>5){
      this.passwordChecks = true;
      this.passwords = true;
    }else if(this.passwords == false){
      this.passwordChecks = false;
      this.passwords = false;
    }else if(this.passwords == true){
      this.passwords = true;
      if(this.password != this.passwordCheck){
        this.passwordChecks = false;
      }
    }else{
      this.passwordChecks = false;
      this.passwords = false;
    }
    this.showSubmit();
  }
 
  emailFormat(email){
    let spl = email.split("");
    let count = 0;
    let bool = false
    for(let i =0; i<spl.length; i++){
      if(spl[i] == "."){
        count = count +1;
      }
      if(spl[i] == "@"){
        bool = true;
      }
    }
    if(bool && count>0){
      return true;
    }else{
      return false;
    }
  }

}
