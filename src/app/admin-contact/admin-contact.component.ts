import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {
  ContactList;

  constructor(private Auth: AuthService,private Toastr : ToastrService,private router : Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem("usertype"))
    {
      this.Toastr.error("Please login first","Error",{
        progressBar:true
      });
      this.router.navigate(["/adminlogin"]);
      }
    console.log("onInit in  Admin Contact Request");
    this.Auth.displayContactList().subscribe((data)=>{this.ContactList=data;console.log("IN Init Of User List Request")})
    console.log("back");
  }

  deleteContact(data)
  {
    this.Auth.deleteContact(this.ContactList[data]._id);
  }

}
