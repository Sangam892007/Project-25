class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            friction:0.5,
            restitution:0.3,
            density:1.2
            
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/dustbingreen.png");
        World.add(world,this.body);
    }
    display(no) {
        var pos = this.body.position;
        if (no === 2){
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,250,130);
        }
        else{
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
      }
    }
}