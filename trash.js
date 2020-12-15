class Trash {
    constructor(x, y, radius) {
        var paperoptions = {
           ' isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=x
        this.y=y
        this.radius=radius
        this.trash = Bodies.circle(this.x, this.y, this.radius, paperoptions);
        this.radius = radius;
      //  this.height = height;
     


        World.add(world, this.trash);
      }
      display(){
        var pos =this.trash.position;
        var angle = this.trash.angle;
        push();
        translate(pos.x, pos.y);
        
        rectMode(CENTER);
        fill("pink")
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }

}