var express=require('express')
var bodyparser=require('body-parser')
var fs = require('fs');
var multer = require('multer');
const nodemailer=require('nodemailer')
const random=require('random')
var app=express()
// const http = require('http');
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//all db things are here
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ReadyToMove", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
// var reqvisitschema = new mongoose.Schema({
//     name: String,
//     email: String,
//     mn:Number
// });// {collection : 'user'});
// var reqvisit = mongoose.model("reqvisit", reqvisitschema);
//var user=require('./schemas/users')

app.post('/login',async (req,res)=>{
    console.log(req.body)
    const {email,password}=req.body
    const resp=await user.findOne({email,password})
    console.log("email and pass by user:"+email+" "+password)
    console.log("response"+resp)
   
           if(resp)
            {
              res.status(200).json({
                isLogin: true,
                userd:resp
                    });
            }
            else{
                console.log("oh no");
                res.status(200).json({
                isLogin: false
            
                });
            
            }
            });



var Registerschema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    number: Number,
    password: String
  }); // {collection : 'user'});
  var user = mongoose.model("user", Registerschema);
  app.post("/userentry", async (req, res) => {
    const email = req.body.email;
    const resp = await user.findOne({ email });
    var emailregister = false;
    console.log("In server");
    if (resp) {
      console.log("oh no");
      res.status(200).json({
        emailregister: true
      });
    } else {
      new  user({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        number: req.body.number,
        password: req.body.pass
       
      }).save(function(err, data) {
        if (err) {
          console.log("Sign up error" + err);
          res.status(500).json({
            isSucceed: false
          });
        } else {
          console.log(data);
          console.log("Sign up data successfully");
          res.status(200).json({
           isSucceed: true
          });
        }
      });
    }
  });
  
  var Requestschema = new mongoose.Schema({
    title: String,
    pickuplocation:String,
    pickupdate:String,
    pickuptime:String,
    deliverylocation:String,
    deliverydate:String,
    description:String,
    img: String,
    email: String,
    
  });

  var requestdata = mongoose.model('requestdata',Requestschema);

  var moverSchema = new mongoose.Schema({
    ownername : String,
    companyname : String,
    email : String,
    number : String,
    password : String,
    address : String,
    landmark : String,
    pincode : String,
    city : String,
    state : String,
    doc : String,
  })

  var mover = mongoose.model('mover',moverSchema);

  // app.use(multer({ dest: "./uploads/",
  //   rename: function (fieldname, filename) {
  //     return filename;
  //   },
  //  }));

  app.post("/requestentry", async (req, res) => {
    var rd = new requestdata();
      
        rd.title=req.body.title
        rd.pickuplocation=req.body.pickuplocation
        rd.pickupdate=req.body.pickupdate
        rd.pickuptime=req.body.pickuptime
        rd.deliverylocation=req.body.deliverylocation
        rd.deliverydate=req.body.deliverydate
        rd.description=req.body.description
        rd.img=req.body.requestimg
        rd.email=req.body.email
        rd.save(function(err, data) {
          if (err) {
            console.log("Request error" + err);
            res.status(500).json({
              isSucceedr: false
            });
          } else {
    
            console.log("Request saved successfully");
            res.status(200).json({
             isSucceedr: true
            });
          }
        });
});

app.post("/userrequestlist", async (req, res) => {
  console.log("User Request List");
  const email = req.body.email;

  requestdata.find({ "email" : email   },function(err,urequest){
    if(err)
    {
        console.log("Error : UserlistRequest")
        res.send(400)
    }
    else
    {
        console.log("User List Request")
        res.send(urequest)

    }
 });
});

app.post("/deleterequest", async (req, res) => {
  console.log("In Server Delete Request");
  const id = req.body.id;
  requestdata.remove({"_id":id,"deleted":null},function(err){
    if(err)
    {
        console.log("Request not deleted");
        res.status(500).json({
          isSucceedreq: false
        });

    }
    else{
        console.log("Request removed !");
        res.status(200).json({
          isSucceedreq: true
         });
    }
})  
  });

  app.post("/userlist", async (req, res) => {
    console.log("User List");
  
    user.find({ },function(err,ulist){
      if(err)
      {
          console.log("Error : Userlist")
          res.send(400)
      }
      else
      {
          console.log("User List ")
         
          res.send(ulist)
  
      }
   });
  });

  app.post("/deleteuser", async (req, res) => {
    console.log("In Server Delete User");
    const id = req.body.id;
    user.remove({"_id":id,"deleted":null},function(err){
      if(err)
      {
          console.log("User not deleted");
          res.status(500).json({
            isSucceedu: false
          });
  
      }
      else{
          console.log("User removed !");
          res.status(200).json({
            isSucceedu: true
           });
      }
  })  
    });

app.post("/allrequestlist", async (req, res) => {
      console.log("All Request List");
    
      requestdata.find({},function(err,allrequest){
        if(err)
        {
            console.log("Error : AlllistRequest")
            res.send(400)
        }
        else
        {
            console.log("All List Request")
            
            res.send(allrequest)
    
        }
     });
    });
    app.post("/adminhome1", async (req,res)=> {
      console.log("Admin Home Server");
      requestdata.find({},function(err,allrequest){
        if(err)
        {
            console.log("Error : AlllistRequest")
            res.send(400)
        }
        else
        {
            console.log("All List Request")
          
            res.send(allrequest)
    
        }
     });
    });
    app.post("/adminhome2", async (req,res)=> {
      console.log("Admin Home Server");
      user.find({ },function(err,ulist){
        if(err)
        {
            console.log("Error : Userlist")
            res.send(400)
        }
        else
        {
            console.log("User List ")
          
            res.send(ulist)
    
        }
     });
    });
    app.post("/adminhome3", async (req,res)=> {
      console.log("Admin Home Server");
      mover.find({ },function(err,clist){
        if(err)
        {
            console.log("Error : Userlist")
            res.send(400)
        }
        else
        {
            console.log("User List ")
          
            res.send(clist)
    
        }
     });
    });
    app.post("/adminhome4", async (req,res)=> {
      console.log("Admin Home Server");
      contact.find({ },function(err,amlist){
        if(err)
        {
            console.log("Error : Userlist")
            res.send(400)
        }
        else
        {
            console.log("User List ")
          
            res.send(amlist)
    
        }
     });
    });

  app.post("/moverentry", async (req, res) => {
    const email = req.body.email;
    const resp = await mover.findOne({ email });
    var emailregister = false;
    console.log("In server");
    if (resp) {
      console.log("oh no");
      res.status(200).json({
        emailregister: true
      });
    } else {
      new  mover({
        ownername : req.body.ownername,
        companyname : req.body.companyname,
        email : req.body.email,
        number : req.body.number,
        password : req.body.pass,
        address : req.body.address,
        landmark : req.body.landmark,
        pincode : req.body.pincode  ,
        city : req.body.city,
        state : req.body.state,
        doc : req.body.doc,
       
      }).save(function(err, data) {
        if (err) {
          console.log("Sign up error" + err);
          res.status(500).json({
            isSucceedm: false
          });
        } else {
         
          console.log("Sign up data successfully");
          res.status(200).json({
           isSucceedm: true
          });
        }
      });
    }
  });

  app.post('/moverlogin',async (req,res)=>{
    //console.log(req.body)
    const {email,password}=req.body
    const resp=await mover.findOne({email,password})
    console.log("email and pass by user:"+email+" "+password)
    // console.log("response"+resp)
   
           if(resp)
            {
              res.status(200).json({
                isLoginm: true,
                userd:resp
                    });
            }
            else{
                console.log("oh no");
                res.status(200).json({
                isLoginm: false
            
                });
            
            }
            });
    app.post("/moverlist", async (req, res) => {
    console.log("Mover List");
  
    mover.find({ },function(err,mlist){
      if(err)
      {
          console.log("Error : Moverlist")
          res.send(400)
      }
      else
      {
          console.log("Mover List ")
         
          res.send(mlist)
  
      }
   });
  });


  app.post("/bidRequest", async (req, res) => {
    // console.log("In Server Bid Request");
    const id = req.body.id;
    requestdata.findOne({"_id":id},function(err,data){
      if(err)
      {
          // console.log("Request Info not fetched");
          res.send(400);
  
      }
      else{
          //  console.log("Request Info !");
           res.send(data);
      }
  })  
    });
    
    app.post("/requestUserDetails", async (req, res) => {
      // console.log("In Server User Request");
      const email = req.body.email;
      user.findOne({"email":email},function(err,data){
        if(err)
        {
            // console.log("User Request Info not fetched");
            res.send(400);
    
        }
        else{
            // console.log("User Request Info !");
            // console.log(data); 
            res.send(data);
        }
    })  
      });

    app.post("/requestEmail",async(req,res)=>{
      // console.log("In request Email");
      const id = req.body.id;
      requestdata.findOne({"_id":id},function(err,data){
        if(err)
        {
          // console.log("User Request Email Info not fetched");
          res.send(400);
  
      }
      else{
          // console.log("User Request Email !");
          // console.log(data.email); 
          res.status(200).json({
            email : data.email
           });
      }
    })
  });

  var Bidschema = new mongoose.Schema({
    bidvalue : Number,
    requestId : String,
    useremail : String,
    movermail : String,

  }); // {collection : 'bid'});
  var bid = mongoose.model("bid", Bidschema);
  app.post("/bidSubmitted", async (req, res) => {
    var bd = new bid();
      
        bd.bidvalue=req.body.bidvalue
        bd.requestId=req.body.requestId
        bd.useremail=req.body.useremail
        bd.movermail=req.body.movermail
        bd.save(function(err, data) {
          if (err) {
            console.log("Bid error" + err);
            res.status(500).json({
              isSucceedbid: false
            });
          } else {
    
            console.log("Bid saved successfully");
            res.status(200).json({
             isSucceedbid: true
            });
          }
        });
  })
  app.post("/AllBid", async (req, res) => {
    console.log("All Bid List");
  
    bid.find({ },function(err,blist){
      if(err)
      {
          console.log("Error : Bidlist")
          res.send(400)
      }
      else
      {
          console.log("Bid List Sent")
         
          res.send(blist)
  
      }
   });
  });
  var Contactschema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    msg: String,
  });
  var contact = mongoose.model("contact", Contactschema);
  app.post("/contactentry", async (req, res) => {
    console.log("In server");
    var cn = new contact();
    cn.name= req.body.name,
    cn.email= req.body.email,
    cn.subject= req.body.subject,
    cn.msg= req.body.msg
    cn.save(function(err, data) {
          if (err) {
            console.log("Contact error" + err);
            res.status(500).json({
              isSucceedc: false
            });
          } else {
    
            console.log("saved successfully");
            res.status(200).json({
             isSucceedc: true
            });
          }
        });
    
  });

  app.post("/displaycontactlist", async (req, res) => {
    console.log("Mover List");
  
    contact.find({ },function(err,clist){
      if(err)
      {
          console.log("Error : Moverlist")
          res.send(400)
      }
      else
      {
          console.log("Mover List ")
          
          res.send(clist)
  
      }
   });
  });

  app.post("/deletecontact", async (req, res) => {
    console.log("In Server Delete User");
    const id = req.body.id;
    contact.remove({"_id":id,"deleted":null},function(err){
      if(err)
      {
          console.log("Contact not deleted");
          res.status(500).json({
            isSucceedcd: false
          });
  
      }
      else{
          console.log("Contact removed !");
          res.status(200).json({
            isSucceedcd: true
           });
      }
  })  
    });

    app.post("/bidDetails", async (req, res) => {
      //console.log("In Server Bid Request");
      const id = req.body.id;
      bid.findOne({"requestId":id}).sort("bidvalue").exec(function(err,data){
        if(err)
        {
            // console.log("Request Info not fetched");
            res.send(400);
    
        }
        else{
            //  console.log("Request Info !");
              
            //console.log(data);
             res.send(data);
        }
    })  
      });

  app.post("/sendmail",async(req,res)=>{
    const mmail=req.body.memail;
    const umail=req.body.uemail;
    const rid=req.body.rid;
    // var options={
    //   min:1000,
    //   max:9999,
    //   integer:true
    // }

    // var num=rn(options)
    //console.log(num)
    let transporter=nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:"readytomove.movers@gmail.com",
        pass:"readytomove@123"
      }
    });
    let info={
      from:"readytomove.movers@gmail.com",
      to:mmail,
      subject:"mail to mover",
      text:"Your Bid Has Been ConFirmed By " + umail
    };
    let info2={
      from:"readytomove.movers@gmail.com",
      to:mmail,
      subject:"mail to user",
      text:"Your Request "+rid +"Has been Accepted By  " + mmail
    };
    console.log("inside server sendmail")
    transporter.sendMail(info,function(error,data){
      if(error){
        console.log("mail failed")
        res.status(200).json({
          issend:false
        });
      }
      else{
        console.log("mail success")
        res.status(200).json({
          issend:true
        });
      }
    })
    transporter.sendMail(info2,function(error,data){
      if(error){
        console.log("mail2 failed")
        res.status(200).json({
          issend1:false
        });
      }
      else{
        console.log("mail2 success")
        res.status(200).json({
          issend1:true
        });
      }
    })
  })

   app.listen(8000,()=>console.log('server is listening at 8000'))
//const server = http.createServer(app);
