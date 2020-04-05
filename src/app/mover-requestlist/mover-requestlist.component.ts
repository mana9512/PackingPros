import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mover-requestlist',
  templateUrl: './mover-requestlist.component.html',
  styleUrls: ['./mover-requestlist.component.css']
})
export class MoverRequestlistComponent implements OnInit {
  AllRequest;Bidlist;
  constructor(private Auth: AuthService, private Toastr : ToastrService, private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("usertype")!="mover")
    {
      this.Toastr.error("Please login first","Error",{
        progressBar:true
      });
      this.router.navigate(["/moverlogin"]);
      }
    console.log("onInit in Admin User List Request");
    this.Auth.displayAllRequestList().subscribe((data)=>{this.AllRequest=data;console.log("IN Init Of Admin User List Request")})
    console.log("back");
    this.Auth.AllBid().subscribe((data)=>{this.Bidlist=data;console.log("IN Init Of All bid Request")})
  }

  bidRequest(data){
    this.Auth.bidRequest(this.AllRequest[data]._id);    
  }
  bidRequestSubmit(data){
    this.Auth.bidRequestSubmit(this.AllRequest[data]._id);   
  } 

}
