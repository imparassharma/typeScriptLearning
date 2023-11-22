

function createCourse():{name:string, price:number}{   //object is the return type and should be in this format

    return ({name:"JAVA",price:399});
}

console.log(createCourse);

//problem in objects in typescript

function getDetails(obj:{ age:number, email: string }){
    console.log(obj.age);
    console.log(obj.email);
}

getDetails({age:22,email:"h@h.com"});
//getDetails({name:"Paras",age:22,email:"a@a.com",isPaid:false});  //not working

//but if we use a variable to store tha parameters and then pass it to the function it works fine

let details = {age:22,email:"a@a.com",isPaid:false};
getDetails(details);  //no error


export {}