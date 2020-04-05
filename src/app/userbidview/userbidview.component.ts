import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userbidview',
  templateUrl: './userbidview.component.html',
  styleUrls: ['./userbidview.component.css']
})
export class UserbidviewComponent implements OnInit {
  RequestInfoBid;RequestBid;
  isBid:Boolean=true;

  constructor(private Auth:AuthService,private router:Router,private Toastr : ToastrService) { }

  ngOnInit() {
    if(!sessionStorage.getItem("email"))
    {
      this.Toastr.error("Please login first","Error",{
        progressBar:true
      });
      this.router.navigate(["/selectlogin"]);
      }
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    var id = sessionStorage.getItem('r_id');
    this.Auth.requestInfoBid(id).subscribe((data)=>{this.RequestInfoBid=data;console.log("IN Init Of Bid Request ")});
    //this.Auth.requestEmail(id); 

    //(async () =>{
      // console.log("before delay");
      //var e = sessionStorage.getItem('uremail');
     // await delay(2000);
      // console.log("after delay")
    this.Auth.requestBidDetails(id).subscribe((data)=>{this.RequestBid=data;
      if(this.RequestBid == null)
      {
        this.isBid = false;
      }
      else{
        this.isBid = true;
      }
      console.log("In Init of Bid Request for User")});
      // console.log("in OnInit of request info");

  }
  ConfirmBid(id,rid,memail,uemail)
  {
    this.Auth.sendmail(memail,uemail,rid);
    this.Auth.deleteRequest(rid);
    this.router.navigate(['/listrequest']);
  }
  
}
