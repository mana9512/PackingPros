import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bidsubmit',
  templateUrl: './bidsubmit.component.html',
  styleUrls: ['./bidsubmit.component.css']
})
export class BidsubmitComponent implements OnInit {
  RequestInfoBid;RequestUser;
  constructor(private Auth : AuthService,private router : Router) { }

  ngOnInit() {
   
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    var id = sessionStorage.getItem('r_id');
    this.Auth.requestInfoBid(id).subscribe((data)=>{this.RequestInfoBid=data;console.log("IN Init Of Bid Request ")});
    this.Auth.requestEmail(id);    
    var e = sessionStorage.getItem('uremail');
    this.Auth.requestUserDetails(e).subscribe((data)=>{this.RequestUser=data;console.log("In Init of Bid Request for User")});
  
}
  BidSubmit(event)
  {
    console.log("Inside BidEntry");
    event.preventDefault();
    const target = event.target;
    var errorList = [];

    const bidvalue = target.querySelector("#bid").value;
    const requestId = sessionStorage.getItem('r_id');
    const useremail = sessionStorage.getItem('uremail');
    const movermail =  sessionStorage.getItem('memail');
    if (errorList.length === 0)
    { 
      this.Auth.bidSubmitted(bidvalue,requestId,useremail,movermail);
    
    }
  }

}
