type User = {
    name:string;
    id:number
}

type Admin = {
    username : string;
    id:number
}

let employee : User | Admin ={username : "Paras",id : 333};
console.log(employee);

// let customer : User = {username:"emp1",id:111};  //error
// console.log(customer);
