let user : (number|string)[]; //array
user = [1,"a"]; 
user = ["b",1];

//but if we want to control the order of the input elements then tuple is used

let tuple1 :[string,number];
tuple1 = ["a",1]; //correct
//tuple1 = [1,"a"]; // order mismatched

export {}