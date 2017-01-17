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

showPlayers(players);

console.log(chasers);
console.log(runners);

players[0].tag(players[9]);
players[2].tag(players[7])
players[5].tag(players[7]);


console.log(players[7].flag());

console.log(runners.won(chasers));

let game2result = require('./game2');
let result = game2result(players);
console.log(game2result(players));
console.log(chasers.won(runners));


});

function showPlayers(list){

    for(let i=0; i<list.length; i++){

     if (list[i].type === 'chasers'){
        let parent1 = document.querySelector('#chaseList');
        let child1 = document.createElement('li');
        child1.textContent = list[i].name;
        parent1.appendChild(child1);
        }
    

        if (list[i].type === 'runners'){
        let parent2 = document.querySelector('#runList');
        let child2 = document.createElement('li');
        child2.textContent = list[i].name + ' (status: ' + list[i].frozen + ')';
        parent2.appendChild(child2);

        let freezeButton = document.createElement('button');
        freezeButton.setAttribute('id', "freeze");
        freezeButton.textContent = 'Freeze';
        let flagButton = document.createElement('button');
        flagButton.setAttribute('id', 'flag');
        flagButton.textContent = 'Flag';
        child2.appendChild(freezeButton);
        child2.appendChild(flagButton);
            


        }
    }
    
};


