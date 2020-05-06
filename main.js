// console.log("zdvsdfsd");

// const a=10;

// console.log("Here we have " +a);

var users={
    name:"sam",
    age:232,
    gender:"m",
    color:"brown"

}
console.log(users);
console.log(users.age);

// Anonymous function

// var ann=function(){

//     console.log("this is anonymous function");
// }

// function without name called anonymous function 

var ann=function(a,b){

    const d= a+b;
    console.log("this is anonymous function" +d);
}

ann(9,9);

// Arrow function

// var use= ()=>console.log("this is arrow function");
// var use= (a,b)=>console.log("this is arrow function with param" +a*b);

var use= (a,b)=>{
  const d=a*b;
    console.log("this is arrow function with param" +d);
}

use(8,9);


var name="pradeep";
module.exports.abc=name;
