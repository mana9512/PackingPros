import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { Subject } from 'rxjs';

export interface userdata{
  email:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public email
  public isLogged
  public authListner = new Subject<boolean>();
  constructor(private http:HttpClient, private router: Router, private Toastr: ToastrService) { }

  getAuthListner(){
    return this.authListner.asObservable();
  }
  
  loginuser(email,password){ 
    console.log("b click");
    this.http.post("http://localhost:8000/login",{email,password}).subscribe((res: any)=>{
    console.log("my response"+res)
    console.log("my response"+res.isLogin)
      if(res.isLogin) {
        this.authListner.next(true);
        sessionStorage.setItem('usertype',"user");
        ///console.log(res.userd)
        console.log("email from service:"+res.userd['email'])
        sessionStorage.setItem('email',res.userd['email'])
        sessionStorage.setItem('fname',res.userd['fname'])
       // this.isLogged.next(true)
        this.Toastr.success('Logging You In','Correct');
        // this.login.closeAll();
        // var refresh : HeaderComponent = new HeaderComponent(null,this);
        // refresh.ngOnInit();
       
        this.router.navigate(['/']);
      }
      if(!res.isLogin) {
        this.Toastr.error('Invalid login credentials','Error');
  //          console.log('Error');
      }
  }
    )}


  userregister(fname,lname, email, number, pass) {
    console.log("Inside signUpData Auth service");
    this.http.post("http://localhost:8000/userentry", { fname,lname, email, number, pass })
      .subscribe(
        (response: any) => {
          if (response.emailregister) {
            this.Toastr.error("Email id already exist", "Error", {
              progressBar: true
           });
          }
          if (response.isSucceed) {
            this.Toastr.success("Signed Up! Ready for Login", "Success", {
              progressBar: true
            });

            this.router.navigate(['/login']);
          }
        },
        (error: any) => {
          if (error.isSucceed === "false") {
            this.Toastr.error("Something went wrong", "Error");

            console.log("Error-->");
          }
        }
      );
  }


  requestEntry(title,pickuplocation,pickupdate,pickuptime,deliverylocation,deliverydate,description,email,requestimg)
  {
    console.log("Inside Request Auth service");
    this.http.post("http://localhost:8000/requestentry", { title,pickuplocation,pickupdate,pickuptime,deliverylocation,deliverydate,description,email,requestimg })
      .subscribe(
        (response: any) => {
          if (response.isSucceedr) {
            this.Toastr.success("Request Posted Successfully!!", "Success", {
              progressBar: true
            });

            this.router.navigate(['/listrequest']);
          }
        },
        (error: any) => {
          if (error.isSucceedr === "false") {
            this.Toastr.error("Something went wrong", "Error");

            console.log("Error-->");
          }
        }
        );
  }


  displayUserRequestList(email)
  {
    console.log("In Display UserRequestList");
    return this.http.post('http://localhost:8000/userrequestlist',{email})
  }


  deleteRequest(id){
    console.log("In Delete Request");
    this.http.post("http://localhost:8000/deleterequest",{id}).subscribe((response: any) => {
      if (response.isSucceedreq) {
        this.Toastr.success("Request Removed Successfully!!", "Success", {
          progressBar: true
        });
        var cur = this.router.url;
        console.log(cur);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([cur]);
      }); 
        // this.router.navigate(['/listrequest']);
        
      }
    },
    (error: any) => {
      if (error.isSucceedreq === "false") {
        this.Toastr.error("Something went wrong", "Error");

        console.log("Error-->");
      }
    });
  }


  displayUserList()
  {
    console.log("In Display UserList");
    return this.http.post('http://localhost:8000/userlist',{})
  }


  deleteUser(id){
    console.log("In Delete User");
    this.http.post("http://localhost:8000/deleteuser",{id}).subscribe((response: any) => {
      if (response.isSucceedu) {
        this.Toastr.success("User Removed Successfully!!", "Success", {
          progressBar: true
        });
        var cur = this.router.url;
        console.log(cur);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([cur]);
      }); 
        // this.router.navigate(['/listrequest']);
        
      }
    },
    (error: any) => {
      if (error.isSucceedu === "false") {
        this.Toastr.error("Something went wrong", "Error");

        console.log("Error-->");
      }
    });
  }


  displayAllRequestList()
  {
    console.log("In Admin Display UserRequestList");
    return this.http.post('http://localhost:8000/allrequestlist',{})
  }


  displayAdminHome1()
  {
    console.log("In Admin Home Service");
    return this.http.post('http://localhost:8000/adminhome1',{})

  }

  
  displayAdminHome2()
  {
    console.log("In Admin Home Service");
    return this.http.post('http://localhost:8000/adminhome2',{})

  }
  
  displayAdminHome3()
  {
    console.log("In Admin Home Service");
    return this.http.post('http://localhost:8000/adminhome3',{})

  }
  displayAdminHome4()
  {
    console.log("In Admin Home Service");
    return this.http.post('http://localhost:8000/adminhome4',{})

  }

  moverregister(ownername,companyname,email,number,pass,address,landmark,pincode,city,state,doc)
  {
    console.log("Inside signUpData Auth service");
    this.http.post("http://localhost:8000/moverentry", { ownername,companyname,email,number,pass,address,landmark,pincode,city,state,doc })
      .subscribe(
        (response: any) => {
          if (response.emailregister) {
            this.Toastr.error("Email id already exist", "Error", {
              progressBar: true
           });
          }
          if (response.isSucceedm) {
            this.Toastr.success("Signed Up! Ready for Login", "Success", {
              progressBar: true
            });

            this.router.navigate(['/moverlogin']);
          }
        },
        (error: any) => {
          if (error.isSucceedm === "false") {
            this.Toastr.error("Something went wrong", "Error");

            console.log("Error-->");
          }
        }
      );

  }

  loginmover(email,password){ 
    console.log("b click");
    this.http.post("http://localhost:8000/moverlogin",{email,password}).subscribe((res: any)=>{
    console.log("my response"+res)
    console.log("my response"+res.isLoginm)
      if(res.isLoginm) {
        this.authListner.next(true);
        ///console.log(res.userd)
        sessionStorage.setItem('usertype',"mover");
        console.log("email from service:"+res.userd['email'])
        sessionStorage.setItem('memail',res.userd['email'])
        sessionStorage.setItem('oname',res.userd['ownername'])
       // this.isLogged.next(true)
        this.Toastr.success('Logging You In','Correct');
        // this.login.closeAll();
        // var refresh : HeaderComponent = new HeaderComponent(null,this);
        // refresh.ngOnInit();
       
        this.router.navigate(['/']);
      }
      if(!res.isLoginm) {
        this.Toastr.error('Invalid login credentials','Error');
  //          console.log('Error');
      }
  }
    )}
    displayMoverList()
    {
      console.log("In Display MoverList");
      return this.http.post('http://localhost:8000/moverlist',{})
    }  
    deleteMover(id){
      console.log("In Delete Mover");
      this.http.post("http://localhost:8000/deletemover",{id}).subscribe((response: any) => {
        if (response.isSucceedm) {
          this.Toastr.success("Mover Removed Successfully!!", "Success", {
            progressBar: true
          });
          var cur = this.router.url;
          console.log(cur);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([cur]);
        }); 
          // this.router.navigate(['/listrequest']);
          
        }
      },
      (error: any) => {
        if (error.isSucceedm === "false") {
          this.Toastr.error("Something went wrong", "Error");
  
          console.log("Error-->");
        }
      });
    } 
    
    bidRequest(id){
      // console.log("In Bid Request");
      sessionStorage.setItem('r_id',id);
      this.router.navigate(['/requestinfo']);
    }
    bidRequest1(id){
      console.log("In Bid Request1");
      sessionStorage.setItem('r_id',id);
      this.router.navigate(['/userbidview']);
    }

    bidRequestSubmit(id){
      // console.log("In Bid Request");
      sessionStorage.setItem('r_id',id);
      this.router.navigate(['/bitsubmit']);
    }

    requestInfoBid(id)
    {
       console.log("In Display Request Info Bid");
       console.log(id);
      return this.http.post('http://localhost:8000/bidRequest',{id})
    }
    
    requestUserDetails(email)
    {
      // console.log("In Display Request User Info Bid");
      return this.http.post('http://localhost:8000/requestUserDetails',{email})
    }
    requestEmail(id)
    {
      // console.log("In request Email");
      this.http.post("http://localhost:8000/requestEmail",{id}).subscribe((res: any)=>{
      sessionStorage.setItem('uremail',res.email);
     
        
      })

    }
    bidSubmitted(bidvalue,requestId,useremail,movermail){
      console.log("Inside BidSubmitted Auth service");
    this.http.post("http://localhost:8000/bidSubmitted", { bidvalue,requestId,useremail,movermail })
      .subscribe(
        (response: any) => {
          if (response.isSucceedbid) {
            this.Toastr.success("Bid Submitted Successfully!!", "Success", {
              progressBar: true
            });

            this.router.navigate(['moverrequestlist']);
          }
        },
        (error: any) => {
          if (error.isSucceedbid === "false") {
            this.Toastr.error("Something went wrong", "Error");

            console.log("Error-->");
          }

        })
    }  
    AllBid()
    {
      console.log("In All Bid List");
      return this.http.post('http://localhost:8000/AllBid',{})
    }  
    contact(name, email, subject, msg) {
      console.log("Inside signUpData Auth service");
      this.http.post("http://localhost:8000/contactentry", { name, email, subject, msg })
      .subscribe(
        (response: any) => {
          if (response.isSucceedc) {
            this.Toastr.success("Send Successfully!!", "Success", {
              progressBar: true
            });

            this.router.navigate(['home']);
          }
        },
        (error: any) => {
          if (error.isSucceedc === "false") {
            this.Toastr.error("Something went wrong", "Error");

            console.log("Error-->");
          }

        })
    }

    deleteContact(id){
      console.log("In Delete Contact");
      this.http.post("http://localhost:8000/deletecontact",{id}).subscribe((response: any) => {
        if (response.isSucceedcd) {
          this.Toastr.success("Contact Removed Successfully!!", "Success", {
            progressBar: true
          });
          var cur = this.router.url;
          console.log(cur);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([cur]);
        }); 
          // this.router.navigate(['/listrequest']);
          
        }
      },
      (error: any) => {
        if (error.isSucceedcd === "false") {
          this.Toastr.error("Something went wrong", "Error");
  
          console.log("Error-->");
        }
      });
    } 

    requestBidDetails(id)
    {
       console.log("In Display Bid");
       console.log(id);
      return this.http.post('http://localhost:8000/bidDetails',{id})
    }


    displayContactList()
    {
      console.log("In Admin Display UserRequestList");
      return this.http.post('http://localhost:8000/displaycontactlist',{})
    }
    
    sendmail(memail,uemail,rid){
      console.log("inside sendmail auth")
      this.http.post('http://localhost:8000/sendmail',{memail,uemail,rid})
      .subscribe((response: any) => {
        if (response.issend) {
          this.Toastr.success("Mail Send Successfully", "Success");
        }
        else{
          this.Toastr.error("Mail not Send", "Error");
        }
    });
  }
}
