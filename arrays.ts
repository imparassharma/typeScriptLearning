const superHeros : string [] =[];

superHeros.push("thor");
superHeros.push("ironman");

console.log(superHeros);

//Or

const superHerosDc : Array<string> = [];

superHerosDc.push("superman");
console.log(superHerosDc);


type hero = {
    name:string;
    power:number;
}

const superHerosMarvel : Array<hero> = [];

superHerosMarvel.push({name:"hulk",power:200});

console.log(superHerosMarvel);

//2D array


const twoDarr : number [][]=[
    [2,3,2],
    [4,5,6]
];

console.log(twoDarr[0][1])   //3