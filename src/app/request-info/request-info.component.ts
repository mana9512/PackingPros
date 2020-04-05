import { Component, OnInit ,DoCheck} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.css']
})
export class RequestInfoComponent implements OnInit {
  RequestInfoBid;RequestUser;uremail;
  constructor(private Auth:AuthService,private router: Router) { }

  ngOnInit() {
    
    // function delay(ms:number){
    //   return new Promise(resolve => setTimeout(resolve,ms));
    // }
   
    // var id = sessionStorage.getItem('r_id');
    // this.Auth.requestInfoBid(id).subscribe((data)=>{this.RequestInfoBid=data;console.log("IN Init Of Bid Request ")});
    // this.Auth.requestEmail(id); 

    // //(async () =>{
    //   console.log("before delay");
    //   var e = sessionStorage.getItem('uremail');
    //  // await delay(2000);
    //   console.log("after delay")
    // this.Auth.requestUserDetails(e).subscribe((data)=>{this.RequestUser=data;console.log("In Init of Bid Request for User")});
    //   console.log("in OnInit of request info");
    //   // var cur = this.router.url;
    //   //   console.log(cur);
    //   // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   //   this.router.navigate([cur]);
    //   // })
      

    //} )
    
  
    
    
  
  }
  ngDoCheck(){
   var id = sessionStorage.getItem('r_id');
    this.Auth.requestInfoBid(id).subscribe((data)=>{this.RequestInfoBid=data;console.log("IN Init Of Bid Request ")});
    this.Auth.requestEmail(id); 

    //(async () =>{
      // console.log("before delay");
      var e = sessionStorage.getItem('uremail');
     // await delay(2000);
      // console.log("after delay")
    this.Auth.requestUserDetails(e).subscribe((data)=>{this.RequestUser=data;console.log("In Init of Bid Request for User")});
      // console.log("in OnInit of request info");

  }

}
