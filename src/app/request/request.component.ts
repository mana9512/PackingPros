import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  fileData: File = null;

  imgurl:String=""
  fileToUpload:File=null;

  constructor(private Auth: AuthService, private Toastr : ToastrService,private router: Router) { }
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
    if(!sessionStorage.getItem("email"))
    {
      this.Toastr.error("Please login first","Error",{
        progressBar:true
      });
      this.router.navigate(["/selectlogin"]);
      }
  }

  RequestDataEntry(event)
  {
    console.log("Inside RequestDataEntry");
    event.preventDefault();
    const target = event.target;
    var errorList = [];

    const title = target.querySelector("#title").value;
    const pickuplocation = target.querySelector("#pickuplocation").value;
    const pickupdate = target.querySelector("#pickupdate").value;
    const pickuptime = target.querySelector("#pickuptime").value;
    const deliverylocation = target.querySelector("#deliverylocation").value;
    const deliverydate = target.querySelector("#deliverydate").value;
    const description = target.querySelector("#description").value;
    const email = sessionStorage.getItem('email');
    const requestimg = this.imgurl;
    if (errorList.length === 0) this.Auth.requestEntry(title,pickuplocation,pickupdate,pickuptime,deliverylocation,deliverydate,description,email,requestimg);
    else
    {
      this.Toastr.error("Error In Posting Request", "Error", {
        progressBar: true
      });
      console.log("error in request component");
    }
    
  }

}
