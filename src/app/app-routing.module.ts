import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddformComponent } from './addform/addform.component';
import { OtpformComponent } from './otpform/otpform.component';


const routes: Routes = [{path:'add',component:AddformComponent},
{path:'',component:AddformComponent},
{path:'otp',component:OtpformComponent},
{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
