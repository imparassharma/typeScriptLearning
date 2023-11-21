let myName: string = "Paras"; 
let myAge: number = 22;
console.log(myName); 

let hero:string;

function getHero(){

    return "thor";
}

hero = getHero();
console.log(hero);

function addTwo(num:number){
    return num+2;
}

let ans = addTwo(5);
console.log(ans);


export {};