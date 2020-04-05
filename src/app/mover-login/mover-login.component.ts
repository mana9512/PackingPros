import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-mover-login',
  templateUrl: './mover-login.component.html',
  styleUrls: ['./mover-login.component.css']
})
export class MoverLoginComponent implements OnInit {

  constructor(private Auth:AuthService) { }

  ngOnInit() {
  }

  loginevent(event) {
    console.log("e click");
    event.preventDefault()
    const target = event.target
    var errorList=[]
    
   
    const email = target.querySelector('#email').value
    
    const password = target.querySelector('#password').value
   
    
    if(errorList.length===0)
      this.Auth.loginmover(email,password);
}

}
