import { Component } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(){

  }

  ngOnInit():void{

  }

  user_records:any[]=[];

  data={
    fname:"",
    lname:"",
    dep:"",
    dob:"",
    mail:"",
    pw:""

  }

  doRegistration(Value:any){
    this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
    if(this.user_records.some((v)=>{
      return v.mail==this.data.mail
    })){
      alert("Already Registered Email");
    }
    else{
      this.user_records.push(this.data)
      localStorage.setItem("users",JSON.stringify(this.user_records));
      alert("Hi" +" "+ this.data.fname+" "+ "You are successfully registered");
    }

  }

}
