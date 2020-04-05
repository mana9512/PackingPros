import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  UserList;
  constructor(private Auth: AuthService, private Toastr : ToastrService,private router : Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem("usertype"))
    {
      this.Toastr.error("Please login first","Error",{
        progressBar:true
      });
      this.router.navigate(["/adminlogin"]);
      }
    console.log("onInit in User List Request");
    this.Auth.displayUserList().subscribe((data)=>{this.UserList=data;console.log("IN Init Of User List Request")})
    console.log("back");
  }

  deleteUser(data)
  {
    this.Auth.deleteUser(this.UserList[data]._id);
  }
}
