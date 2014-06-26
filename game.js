//class game

function Game(canvas){
    //Hold the this ref in self for access
    var self = this
    //Getting the 2d context of the canvas
    this.context = canvas.getContext("2d")
    
    //Get the height and width of the game area
    this.height = canvas.height
    this.width = canvas.width

    //Map of key state
    //If the key is pressed down we set the map entry to true
    //else false for keyup
    this.keyPressed = {}

    
    //JS keyboard event handler
    $(canvas).on('keydown keyup',function(e){
        
        var keyName = Game.keys[e.which]
        
        if(keyName){
            self.keyPressed[keyName] = e.type === 'keydown'   
            e.preventDefault()
        }

    })
}

//Map of keys and their unicodes
Game.keys = {
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
}

Game.prototype.start = function(){
    var self = this,
        fps = 60,
        interval = 1000/fps
        
        setInterval(function(){
            self.update()
            self.draw()
        },interval) 
}

Game.prototype.update = function(){
    var self = this
    this.entities.forEach(function(entity){
        if(entity.update) entity.update()    
    })
}

Game.prototype.draw= function(){
    var self = this
    this.entities.forEach(function(entity){
        if(entity.draw) entity.draw(self.context)    
    })
}
