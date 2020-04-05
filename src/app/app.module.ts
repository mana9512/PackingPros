import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ListrequestComponent } from './listrequest/listrequest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from "ngx-toastr";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRequestComponent } from './admin-request/admin-request.component';
import { AdminMoverComponent } from './admin-mover/admin-mover.component';
import { SelectloginComponent } from './selectlogin/selectlogin.component';
import { MoverLoginComponent } from './mover-login/mover-login.component';
import { MoverRegistrationComponent } from './mover-registration/mover-registration.component';
import { MoverRequestlistComponent } from './mover-requestlist/mover-requestlist.component';
import { BidsubmitComponent } from './bidsubmit/bidsubmit.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { UserbidviewComponent } from './userbidview/userbidview.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgetPasswordComponent,
    NewPasswordComponent,
    OtpComponent,
    ProductComponent,
    ContactComponent,
    RequestComponent,
    RequestInfoComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    ListrequestComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AdminUserComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminRequestComponent,
    AdminMoverComponent,
    SelectloginComponent,
    MoverLoginComponent,
    MoverRegistrationComponent,
    MoverRequestlistComponent,
    BidsubmitComponent,
    AdminContactComponent,
    UserbidviewComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-right",
      preventDuplicates: false
    })   
  ],
  providers: [ ],
  bootstrap: [AppComponent],

})
export class AppModule { }
