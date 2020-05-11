const express= require('express');
var router = express.Router();
var userModule=require('../modules/users');
var bcrypt = require('bcryptjs');


function checkEmail(req,res,next){
    var email=req.body.email;
    var checkexitemail= userModule.findOne({email:email});
    checkexitemail.exec((err,data)=>{
        if(err) throw err;
        if(data)
        {
            res.render('signup',{title:"some dummy title", msg:'email already exist'});
        }
        next();
    });
}
function checkUser(req,res,next){
    var username=req.body.username;
    var checkexituser = userModule.findOne({username:username});
    checkexituser.exec((err,data)=>{
        if(err) throw err;
        if(data)
        {
            res.render('signup',{title:"some dummy title", msg:'username already exist'});

        }
        next();
    });
}

router.get('/signup', function(req,res,next){

   // res.send("@@@@@@@@@Here is our get function and our first api function");
   res.render('signup',{title:"some dummy title", msg:''});
});
router.post('/signup',checkEmail,checkUser, function(req,res,next){
   console.log(req.body);
   var username=req.body.uname;
   var fname=req.body.fname;
   var lname=req.body.lname;
   var email=req.body.email;
   var password=req.body.pwd;
   var cpassword=req.body.cpwd;
   if(password!=cpassword)
   {
    res.render('signup',{title:"some dummy title", msg:"password not matched"});

   }
   else
   { 
       password=bcrypt.hashSync(req.body.pwd,10);
    var userDetails= new userModule({
        username:username,
        firstname:fname,
        lastname:lname,
        email:email,
        password:password,
    });
    userDetails.save(function(err,data){
        if(err) throw err;
        console.log(data)
        res.render('signup',{title:"some dummy title", msg:"sign up has been completed"});
    });
   }

    // res.send("@@@@@@@@@Here is our get function and our first api function");
    
 });

 router.get('/', function(req,res,next){

    res.render('login', {title:"Login page",msg:""})
 });
 router.post('/', function(req,res,next){
    var username=req.body.uname;
    var password=req.body.pwd;

    var checkUser= userModule.findOne({username:username});
    console.log(checkUser);
    checkUser.exec((err, data)=>{
        if(err) throw err;

        var passwordDB=data.password;
        if(bcrypt.compareSync(password,passwordDB))
        {
            console.log(passwordDB);
            res.render('login', {title:"Login page",msg:" login has been done successfully"});
        }
        else{
            console.log("failed");
            res.render('login', {title:"Login page",msg:"Invalid username and password"});
        }

    });

 });

module.exports=router;