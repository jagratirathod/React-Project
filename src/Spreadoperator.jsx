import React from "react";

const fullname = ['vinod', 'thapa'];

const biodata = [1, ...fullname, 26, 'female'];
console.log(biodata);
console.log(fullname);


//2nd way -

var shooterGames = ['call of Duty', 'Far cry', 'Resident Evil', 'call of deal']
var racingGames = ['Need for speed', 'Burnut', 'Gran']

var games = [...shooterGames, ...racingGames];
// console.log(games);


//3rd way -

var shooterGames = ['call of Duty', 'Far cry', 'Resident Evil', 'call of deal'];
var [first, ...remaining] = shooterGames;
// console.log(first);
// console.log(remaining);


//4th way  -
const fullName = {
    fname: "vinod",
    lname: "thapa",
}

const biodata = {
    id: 1,
    ...fullName,
    age: 25,
    gender: 'female',
};
// console.log(biodata);