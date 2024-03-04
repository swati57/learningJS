const heros = ["thor","IronMan","Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//modifies exisiting array
// heros.push(dc_heros) //complete array is taken as one element and appended
// console.log(heros);

//does not modify exisiting array
const all_heros = heros.concat(dc_heros) //this will do actual work of adding elements
// console.log(all_heros);

//using spread operator
const all_newHeros = [...heros,...dc_heros]
console.log(all_newHeros);

const arr = [1,2,3, [4,5,6], 7, [8,9, [1,2]]]
const usable_arr = arr.flat(2); //flatten arr to specified depth
console.log(usable_arr);

console.log(Array.isArray("Swati"));
console.log(Array.from("Swati"));

//interesting one: specifiy arr to be made from map/string, else null is returned
console.log(Array.from({name: "Swati"}));

let score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1,score2,score3));