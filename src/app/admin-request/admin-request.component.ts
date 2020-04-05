import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrls: ['./admin-request.component.css']
})
export class AdminRequestComponent implements OnInit {
  AllRequest;
  constructor(private Auth: AuthService, private Toastr : ToastrService,private router : Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem("usertype"))
    {
      this.Toastr.error("Please login first","Error",{
        progressBar:true
      });
      this.router.navigate(["/adminlogin"]);
      }
    console.log("onInit in Admin User List Request");
    this.Auth.displayAllRequestList().subscribe((data)=>{this.AllRequest=data;console.log("IN Init Of Admin User List Request")})
    console.log("back");
  }
  deleteRequest(data)
  {
    this.Auth.deleteRequest(this.AllRequest[data]._id);
  }

}
