function Ball(){
    Entity.call(this)
    this.width = 20 
    this.height = 20
    
    this.xVel = 2
    this.yVel = 3

    this.x = game.width / 2 - this.width
    this.y = game.height/ 2 - this.height
}

Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor = Ball

//override the update funtion 

Ball.prototype.update = function(){
    Entity.prototype.update.call(this)
    var hitter 
    
    if (this.x > game.width - this.width || this.x<0){
        this.xVel *=-1
    }
    if (this.y > game.height - this.height || this.y<0){
        this.yVel *=-1
    }
    
    //hitlogic
    if (this.intersect(game.player)){
        hitter = game.player
    }
    else if(this.intersect(game.bot)){
        hitter = game.bot
    }
    
    if (hitter){
        this.xVel *=-1     
    }

}
