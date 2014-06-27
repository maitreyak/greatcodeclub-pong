function Paddle(){
    Entity.call(this)
    
    this.width = 10
    this.height = 100
   }

Paddle.prototype = Object.create(Entity.prototype)
Paddle.prototype.constructor = Paddle

Paddle.prototype.update = function(){
    Entity.prototype.update.call(this)
    this.y = Math.min(Math.max(this.y,0),game.height-this.height) 
}


function Player(){
    Paddle.call(this)
     //init position
    this.x = 10
    this.y = (game.height - this.height)/2
}

Player.prototype = Object.create(Paddle.prototype)
Player.prototype.constructor = Player

Player.prototype.update = function(){
 Paddle.prototype.update.call(this)
 var speed = 5 
    if(game.keyPressed.up){
        this.yVel-=speed        
    }else if(game.keyPressed.down){
        this.yVel+=speed        
    }else{
        this.yVel =0
    }
}

function Bot(){
    Paddle.call(this)
     //init position
    this.x = game.width - this.width - 10
    this.y = (game.height - this.height)/2
}

Bot.prototype = Object.create(Paddle.prototype)
Bot.prototype.constructor = Bot

Bot.prototype.update = function(){
    var speed = 5
    if(game.ball.y > this.y+10){
        this.yVel = speed
    }
    else if (game.ball.y < this.y-10){
        this.yVel = -speed
    }else{
        this.yVel = 0 
    }
    Paddle.prototype.update.call(this)
}

