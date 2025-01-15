const anime_ideals = ["ayano","isagi","nishinoya"]
const anime_fav = ["haikyuu","cote","tomodachiGame"]

anime_ideals.push(anime_fav)// doesnt directly merge but place and array inside of another array

// console.log(anime_ideals);
// console.log(anime_ideals[3][1]);

const anime = anime_fav.concat(anime_ideals)// concat requires a third array bcz it merges 2 array to make a new 3 rd one

//console.log(anime);

// spread is used below
const all_new_heros = [...anime_ideals,...anime_fav]
console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const anotherArray1 = [1, 2, 3 [4, 5, 6], 7, [6, 7, [4, 5]]]// as i miss a comma after 3 whole 3 and and the nested array in front of it will be printed as undefined 

const realArr = anotherArray.flat(Infinity)//depth bta do usse
const realArr1 = anotherArray1.flat(Infinity)//depth bta do usse
console.log(realArr);
console.log(realArr1);


console.log(Array.isArray("harsh"));
console.log(Array.from("harsh"));
console.log(Array.from({name: "harsh"}));//if it is unable to make an array it will give empty array []!!!!!!!!! one need to tell whether to make array of "key" or of "values" 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
