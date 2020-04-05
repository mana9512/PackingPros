import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  rdcount;ucount;mcount;ccount;
  constructor(private Auth: AuthService,private Toastr : ToastrService,private router : Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem("usertype"))
    {
      this.Toastr.error("Please login first","Error",{
        progressBar:true
      });
      this.router.navigate(["/adminlogin"]);
      }
  
    this.Auth.displayAdminHome1().subscribe((data1)=>{this.rdcount=data1;console.log("IN Init Of AdminHome "+ this.rdcount.length)});
    this.Auth.displayAdminHome2().subscribe((data2)=>{this.ucount=data2;console.log("IN Init Of AdminHome " + this.ucount.length)});
    this.Auth.displayAdminHome3().subscribe((data3)=>{this.mcount=data3;console.log("IN Init Of AdminHome " + this.mcount.length)});
    this.Auth.displayAdminHome4().subscribe((data4)=>{this.ccount=data4;console.log("IN Init Of AdminHome " + this.ccount.length)});   
    var rdlength : number = this.rdcount.length;
    var ulength : number = this.ucount.length;
    var mlength : number = this.mcount.length;
    var clength : number = this.ccount.length;
    $('.counter-count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
   
  }
  get rd(){
    return this.rdcount.length;
  } 
  get ud(){
    return this.ucount.length;
  }
  get md(){
    return this.mcount.length;
  }
  get cd(){
    return this.ccount.length;
  }  
}
