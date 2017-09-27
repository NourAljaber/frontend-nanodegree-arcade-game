// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
this.x = x;
this.y = y;
this.speed = speed;

    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) { // update its a loop created in the engain.js from udacity keep the loop working 

  this.x = this.x +this.speed*dt;
  if ( this.x > 505){
    this.x = -100;  // here where the loope stop
    this.speed = (Math.random()*200)+70;
  }

  //here to let the player stoped at the end of canves left ,right ,up, doawn 
  if(player.x < this.x +70 && this.x < player.x+70 && player.y < this.y +40 && this.y < player.y+40 ){
    player.y =  400; //hight 
    player.x = 202; // width

  }


    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x,y) {

    this.x = x;
    this.y = y;

    this.sprite = 'images/char-boy.png';

};



Player.prototype.update = function(dt) {
  
    };



Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    
};
//here i create function key to create the if condetion to tell the game to give an action 
Player.prototype.handleInput =function (key){
    if (key === 'left'){
      if ( this.x > 0){
         this.x = this.x - 101 ; // this code make the player move to the left 101 x  becous every sequre = 101  and the other like the same whay
      }
    }
    if (key === 'up'){
        if(this.y > 0){
            this.y = this.y - 83 ;
        }
    }  

 if (key === 'right'){
    if(this.x < 400)
        this.x = this.x + 101 ;
    }
 if (key === 'down'){
    if(this.y < 400){
       this.y = this.y + 83 ;

    }
    }
  if ( this.y < 10){
        window.alert("Awesome! You are WINNER")
        this.x = 202;
        this.y = 400 ; 

    }
// the code here put the end of the moves for the user so for example when the user to left should stop working when the this.x >0
// 
}



var allEnemies = [];

var player = new Player (202,400); // player location  in x,y = 505*606  width *hight 
//in the center the width (x) of the canves is 505 and 
//its containes 5 squares each one = 101 from the x 
// 505 % 2 = 202 

// the hight is 606 contanes 6 squeres  then the player should start from the end of the canves in sequer 8 so the location 
//  its = 400 from 606 
var enemy = new Enemy (50,65,65); // x,y,,speed 
var hamad = new Enemy (0,143,150);
var Noor = new Enemy(-100,220,100); // new its for  creat new object 
allEnemies.push(enemy,hamad,Noor); //we push it and put it to the array all element 


// This listens for key presses and sends the keys to your
// Player.handleInput() method. 

//addEventListener is liseten to the user action and runs the functions when the action is made .
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',  // its like dictionry for the keys codes 
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
