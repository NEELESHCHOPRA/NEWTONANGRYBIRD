class Bob {
    constructor(x,y,radius) {
        var opt = {
            'restitution':1,
            'density': 0.25,
            'friction' : 1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,radius,opt);
        this.image = loadImage ("bird.png")

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        imageMode(CENTER)
        fill("violet");
        image(this.image,0,0,this.image.circleRadius,this.image.circleRadius)
        pop();
    }
} 