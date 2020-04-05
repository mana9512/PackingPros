import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-listrequest',
  templateUrl: './listrequest.component.html',
  styleUrls: ['./listrequest.component.css']
})
export class ListrequestComponent implements OnInit {
  URequest;

  constructor(private Auth: AuthService, private Toastr : ToastrService,private router : Router) { }

   i:number;
  ngOnInit() {
    if(!sessionStorage.getItem("email"))
    {
      this.Toastr.error("Please login first","Error",{
        progressBar:true
      });
      this.router.navigate(["/selectlogin"]);
      }
    console.log("onInit in User List Request");
    const email = sessionStorage.getItem('email');
    this.Auth.displayUserRequestList(email).subscribe((data)=>{this.URequest=data;console.log("IN Init Of User List Request")})
    console.log("back");
  }
  deleteRequest(data)
  {
    this.Auth.deleteRequest(this.URequest[data]._id);
  }
  viewBid(data){
    this.Auth.bidRequest1(this.URequest[data]._id);    
  }
    
  get geti(): any {
    console.log("Geti" + this.i);
    return  this.i += 1;
  }
}
