// create player object with properties for
// player type, tag function, frozen status,
// getflag function



module.exports = Player;

function Player(name) {
    this.name = name;
    this.type = null;
    this.status = 'unfrozen';
    this.tag = function(person){
        if(this.type === 'runner' && this.status === 'unfrozen' && person.type === "runner"){
                person.status = 'unfrozen';
            };
        if(this.type === 'chaser' && person.type === 'runner'){
            person.status = 'frozen';
        }
    }
    this.flag = function(person){
        if(this.type === 'runner' && this.status === 'unfrozen'){
            return true;
        }else{
            return false;
        
        }
     
    };
    return this;
};

// add haveFlag = true or false
// check haveFlag in the team won function