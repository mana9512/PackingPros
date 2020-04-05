import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-mover',
  templateUrl: './admin-mover.component.html',
  styleUrls: ['./admin-mover.component.css']
})
export class AdminMoverComponent implements OnInit {
  MoverList;
  constructor(private Auth: AuthService, private Toastr : ToastrService,private router : Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem("usertype"))
    {
      this.Toastr.error("Please login first","Error",{
        progressBar:true
      });
      this.router.navigate(["/adminlogin"]);
      }
    console.log("onInit in Mover List Request");
    this.Auth.displayMoverList().subscribe((data)=>{this.MoverList=data;console.log("IN Init Of Mover List Request")})
    console.log("back");
  }
  deleteMover(data)
  {
    this.Auth.deleteMover(this.MoverList[data]._id);
  }


}
