import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){

  }

  user_records:any[]=[];

  data={
    mail:"",
    pw:""
  }

  doLogin(Values:any){
    this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
    if(this.user_records.some((v)=>{
      return v.mail==this.data.mail && v.pw==this.data.pw
    })){
      alert("User Login Successfully!");
      this.router.navigate(['/userdata']);
    }
    else{
      alert("Login Failed");
    }

  }

}
