module.exports =

    function Team(type) {
        this.type = type;
        this.team = [];
        this.add = function (player) {
            player.type = type;
            this.team.push(player);
        }

        this.won = function () {
             if(type === 'runners'){
            for(let i=0; i<this.team.length; i++){
               if (player[i].flag === true){
                   return true;
               }else{
                   if(type === 'chasers'){
                       
                   }
               }

            }
            

        }

    
return this;
};