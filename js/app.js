let newPlayer = require('./player');


let players = [
   new newPlayer('Kim'),
   new newPlayer('Greg'),
   new newPlayer('Marshall'),
   new newPlayer('Charlotte'),
   new newPlayer('Charlie'),
   new newPlayer('Jenny'),
   new newPlayer('Sam'),
   new newPlayer('John'),
   new newPlayer('Ella'),
   new newPlayer('Scott'),
]

console.log(players);

let newTeam = require('./team');

let chasers = new newTeam('chasers');
let runners = new newTeam('runners');

window.addEventListener('load', function(){

chasers.add(players[0]);
runners.add(players[1]);
chasers.add(players[2]);
runners.add(players[3]);
chasers.add(players[4]);
runners.add(players[5]);
chasers.add(players[6]);
runners.add(players[7]);
chasers.add(players[8]);
runners.add(players[9]);

console.log(chasers);
console.log(runners);

players[0].tag(players[9]);
console.log(players[9].frozen);
players[2].tag(players[7]);
console.log(players[7].frozen);
players[5].tag(players[7]);
console.log(players[7].frozen);

console.log(chasers.won(runners));
console.log(runners.won(chasers));

console.log(players[7].flag());

console.log(runners.won(chasers));

players[0].tag(players[1]);
players[0].tag(players[3]);
players[0].tag(players[5]);
players[0].tag(players[7]);

console.log(chasers.won(runners));


})


