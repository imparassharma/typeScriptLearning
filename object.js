"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCourse() {
    return ({ name: "JAVA", price: 399 });
}
console.log(createCourse);
//problem in objects in typescript
function getDetails(obj) {
    console.log(obj.age);
    console.log(obj.email);
}
getDetails({ age: 22, email: "h@h.com" });
//getDetails({name:"Paras",age:22,email:"a@a.com",isPaid:false});  //not working
//but if we use a variable to store tha parameters and then pass it to the function it works fine
var details = { age: 22, email: "a@a.com", isPaid: false };
getDetails(details); //no error
