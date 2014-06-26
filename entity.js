function Entity(){
    //position
    this.x = 0
    this.y = 0
    
    //dimensions 
    this.width = 0
    this.height = 0
    
    //velocity
    this.xVel = 0
    this.yVel = 0
}

//updates the position based in velocity of the entity 
Entity.prototype.update = function(){
    this.x +=this.xVel
    this.y +=this.yVel
}

Entity.prototype.draw = function(context){
    context.fillStyle = "#fff"
    context.fillRect(this.x,this.y,this.width,this.height)
}

Entity.prototype.intersect = function(other){
    return this.y + this.height > other.y &&
        this.y < other.y + other.height &&
        this.x + this.width > other.x &&
        this.x < other.x + other.width 
}


