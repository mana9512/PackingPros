import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public authSub: Subscription;
  public user=''
  public islogged=false
  
  constructor(private Auth:AuthService,private router:Router,private Toastr:ToastrService) { }

  ngOnInit() {
    if(!sessionStorage.getItem('usertype')) 
    {
      this.islogged = false;
    }
    else
      this.islogged = true;
    
    
      this.authSub=this.Auth.getAuthListner()
    .subscribe(data=>{
    this.islogged=data;
  })
 }
 get userType(){
  return sessionStorage.getItem('usertype');
 }
 get fname(): any {
  return sessionStorage.getItem('fname');
}
get oname(): any {
  return sessionStorage.getItem('oname');
}

onLogout(){
  sessionStorage.clear();
  this.islogged = false;
  this.router.navigate(['/']);
  this.Toastr.success('Logged out Successfully','Correct');
}
}
