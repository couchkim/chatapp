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
        if(this.type === 'runner' && this.frozen === false && person.type === 'runner'){
             person.frozen = false;
             return person.frozen;
            }
        if(this.type === 'chaser' && person.type === 'runner'){
            person.frozen = true;
            return person.frozen;
        }
    };  
    this.haveFlag = false;
    this.flag = function(){
        if(this.type === 'runner' && this.frozen === false){
            this.haveFlag = true;
    
        }
        return this.haveFlag;
     
    };
    return this;
};

// add haveFlag = true or false
// check haveFlag in the team won function