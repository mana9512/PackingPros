import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  
  constructor( private Auth: AuthService, private Toastr : ToastrService) {  }

  

  ngOnInit() { }
  
  RegisterDataEntry(event) {
    console.log("Inside signUpDataEntry");
    event.preventDefault();
    const target = event.target;
    var errorList = [];

    const fname = target.querySelector("#firstname").value;

    const lname = target.querySelector("#lastname").value;

    const email = target.querySelector("#email").value;

    const number = target.querySelector("#mnumber").value;

    const pass = target.querySelector("#password").value;
    const cpass = target.querySelector("#cpassword").value;
    
    if (pass === cpass) {
      if (errorList.length === 0) this.Auth.userregister(fname,lname, email,number, pass);
    } else {
      this.Toastr.error("Password and Confirm Password Must match", "Error", {
        progressBar: true
      });
      console.log("error in component");
    }
  }
}
