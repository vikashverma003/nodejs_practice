// adding new property and methods just like inhertence.
// function without name called anonymous function

/*
var student=function(){
    this.name="sam";
    this.age=34;
    color="black";
}*/

function student(){
    this.name="sam";
    this.age=34;
    color="black";
}

student.prototype={
    email:"info@codebux",
    getName:function(){
        return this.name;
    }
}
var stud =new student();
console.log(stud.name);
console.log(stud.email);
console.log(stud.getName());