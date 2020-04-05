import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService) { }

  ngOnInit() {}

  loginevent(event) {
    console.log("e click");
    event.preventDefault()
    const target = event.target
    var errorList=[]
    
   
    const email = target.querySelector('#email').value
    
    const password = target.querySelector('#password').value
   
    
    if(errorList.length===0)
      this.Auth.loginuser(email,password);
}
}
