import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private Auth: AuthService, private Toastr : ToastrService) { }

  ngOnInit() { }

  ContactDataEntry(event) {
    console.log("Inside ContactDataEntry");
    event.preventDefault();
    const target = event.target;
    var errorList = [];

    const name = target.querySelector("#name").value;

    const email = target.querySelector("#email").value;

    const subject = target.querySelector("#subject").value;

    const msg = target.querySelector("#message").value;

    
    
      if (errorList.length === 0) this.Auth.contact(name, email, subject, msg);
     else {
      this.Toastr.error("Provide Correct Information", "Error", {
        progressBar: true
      });
      console.log("error in component");
    }
  }

}
