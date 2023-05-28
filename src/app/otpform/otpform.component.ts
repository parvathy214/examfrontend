import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.css']
})
export class OtpformComponent {
  User = {
    otp: '',
  };

  constructor(private _auth:BackendService,private _route:Router) { }
  
  ngOnInit(): void {
  }

  Verify(){
    this._auth.checkOTP({email:localStorage.getItem("email"),otp:this.User.otp}).subscribe((data)=>{
      if(data != null){
        alert("Success")
        this._route.navigate(['home'])
      }
      else{
        alert("Failed")
      }
      
    })


  }
}
