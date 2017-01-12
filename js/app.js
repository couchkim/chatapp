let ajax = require('./ajax');



window.addEventListener('load', function (){
    

});

let players = [

];
require('./player');
require('./team');


let runners = new Team();
       for (let i=0; i<players.length; i++){
           if(players[i].type === 'runner'){
            runners.add(players[i]);
           }
        

let chasers = new Team();
    for (let i=0; i<players.length; i++){
           if(players[i].type === 'chaser'){
            chasers.add(players[i]);
           }

