import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { OtpComponent } from './otp/otp.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { RequestComponent } from './request/request.component';
import { RequestInfoComponent } from './request-info/request-info.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ListrequestComponent } from './listrequest/listrequest.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminMoverComponent } from './admin-mover/admin-mover.component';
import { AdminRequestComponent } from './admin-request/admin-request.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SelectloginComponent } from './selectlogin/selectlogin.component';
import { MoverLoginComponent } from './mover-login/mover-login.component';
import { MoverRegistrationComponent } from './mover-registration/mover-registration.component';
import { MoverRequestlistComponent } from './mover-requestlist/mover-requestlist.component';
import { BidsubmitComponent } from './bidsubmit/bidsubmit.component';
import { from } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { UserbidviewComponent } from './userbidview/userbidview.component';

const routes: Routes = [
  { path:"",redirectTo:"home",pathMatch:"full"},
  { path:"home",component:HomeComponent},
  { path:"login",component:LoginComponent},
  { path:"register",component:RegisterComponent},
  { path:"forgetpassword",component:ForgetPasswordComponent},
  { path:"newpassword",component:NewPasswordComponent},
  { path:"otp",component:OtpComponent},
  { path:"product",component:ProductComponent},
  { path:"contact",component:ContactComponent},
  { path:"request",component:RequestComponent},
  { path:"requestinfo",component:RequestInfoComponent},
  { path:"changepassword",component:ChangepasswordComponent},
  { path:"editprofile",component:EditprofileComponent},
  { path:"listrequest",component:ListrequestComponent},
  { path:"header",component:HeaderComponent},
  { path:"footer",component:FooterComponent},
  { path:"adminlogin",component:AdminLoginComponent},
  { path:"selectlogin",component:SelectloginComponent},
  { path:"moverlogin",component:MoverLoginComponent},
  { path:"moverregister",component:MoverRegistrationComponent},
  { path:"moverrequestlist",component:MoverRequestlistComponent},
  {path:"bitsubmit",component:BidsubmitComponent},
  {path:"userbidview",component:UserbidviewComponent},
  { path:"admin",component:AdminComponent,children:[
    { path:"adminhome",component:AdminHomeComponent},
    { path:"adminuser",component:AdminUserComponent},
    { path:"adminmover",component:AdminMoverComponent},
    { path:"adminrequest",component:AdminRequestComponent},
    { path:"admincontact",component:AdminContactComponent},
    { path:"",redirectTo:"adminhome",pathMatch:"full"},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
