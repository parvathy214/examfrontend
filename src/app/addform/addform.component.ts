import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {

  User = {
    email:""
  }
  constructor(private router:Router,private _auth:BackendService,private http: HttpClient){}


  
  ngOnInit(): void {
  }

  onsubmit(){
    this._auth.saveEmail({"email":this.User.email}).subscribe((data)=>{
      console.log(data)
    })
    localStorage.setItem("email",this.User.email)
    this.router.navigate(['otp'])

  }
}
