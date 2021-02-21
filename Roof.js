class Roof {
    constructor(x,y,width,height){
        var opt = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height,opt);
        this.image = loadImage ("wood2.png")
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER)
        fill("lightblue");
        image(this.image,0,0,this.width,this.height)
       // rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
} 