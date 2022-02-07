class Polygon{
    constructor(x, y){
        var options = {

        }

        this.image = loadImage("polygon.png")
        
        this.body = Bodies.circle(50, 200, 16, options);

        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position
    
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 40, 40)
    }
}