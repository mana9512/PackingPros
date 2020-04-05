import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public authListner = new Subject<boolean>();
  
  constructor(private Toastr : ToastrService,private router:Router) { }
  getAuthListner(){
    return this.authListner.asObservable();
  }
  ngOnInit() {
  }
  adminLogin(event){
    event.preventDefault()
    const target = event.target
    var errorList=[]
    if(target.querySelector('#email').value=="readytomove.movers@gmail.com" && target.querySelector('#password').value=="readytomove@123")
    {
      this.Toastr.success('Welcome Admin','Correct');
       sessionStorage.setItem('usertype',"admin");
       this.authListner.next(true);
       this.router.navigate(['/admin']);
      
    }
    else{
      this.Toastr.error('Invalid Credentials','Error');
    }
  }
}
