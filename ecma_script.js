//ECMA SCRIPT or ES6 2015

// let,const, class, Template string

/* let a=30;

function abc(){
    let a=56;
    console.log(a);
}

console.log(a);
abc(); */

/*
const a = {
    name:"sam",
    age:23
}
a.email="sam@gmail.com";
a.age=34;
console.log(a);
*/


/* var name="pradeep";
age=34;

//console.log("hi " +name + "you are " + age);

console.log(`hi  ${name} + you are  ${age}`);
*/

class Users{

   /* constructor(){
        this.name="samy";
        this.age=34;
    }*/
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    getName(){
        this.email="info@codubux";
        return this.name;
    }
    getAge(){
        return this.age;
    }

    getEmail(){
        return this.email;
    }
}

var user = new Users("samy wamy", 452);
user.getName();
console.log(user.getEmail());
console.log(user.getAge());