import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-mover-registration',
  templateUrl: './mover-registration.component.html',
  styleUrls: ['./mover-registration.component.css']
})
export class MoverRegistrationComponent implements OnInit {

  imgurl:String=""
  fileToUpload:File=null;

  constructor(private Auth: AuthService, private Toastr : ToastrService) { }

  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0)
    var reader = new FileReader()
    reader.onload = (event: any) => {
      this.imgurl=event.target.result;
      console.log(this.imgurl)        
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  ngOnInit() {
  }


  RegisterDataEntry(event) {
    console.log("Inside Mover signUpDataEntry");
    event.preventDefault();
    const target = event.target;
    var errorList = [];

    const ownername = target.querySelector("#ownername").value;
    const companyname = target.querySelector("#companyname").value;
    const email = target.querySelector("#email").value;
    const number = target.querySelector("#mnumber").value;
    const pass = target.querySelector("#password").value;
    const cpass = target.querySelector("#cpassword").value;
    const address = target.querySelector("#address").value;
    const landmark = target.querySelector("#landmark").value;
    const pincode = target.querySelector("#pincode").value;
    const city = target.querySelector("#city").value;
    const state = target.querySelector("#state").value;
    const doc = this.imgurl;
    
    if (pass === cpass) {
      if (errorList.length === 0) this.Auth.moverregister(ownername,companyname,email,number,pass,address,landmark,pincode,city,state,doc);
    } else {
      this.Toastr.error("Password and Confirm Password Must match", "Error", {
        progressBar: true
      });
      console.log("error in component");
    }
  }

}
