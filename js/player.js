// create player object with properties for
// player type, tag function, frozen status,
// getflag function



module.exports = Player;

function Player(name) {
    this.name = name;
    this.type = null;
    // this.status = 'unfrozen';
    this.frozen = false;
    this.tag = function(person){
        if(this.type === 'runners' && this.frozen === false && person.type === 'runners'){
             person.frozen = false;
             return person.frozen;
            }
        if(this.type === 'chasers' && person.type === 'runners'){
            person.frozen = true;
            return person.frozen;
        }
    };  
    this.haveFlag = false;
    this.flag = function(){
        if(this.type === 'runners' && this.frozen === false){
            this.haveFlag = true;
            return this.haveFlag;
    
        }
        
     
    };
    return this;
};

// add haveFlag = true or false
// check haveFlag in the team won function