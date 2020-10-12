class Ball {
    constructor(x,y,radius){
        var options = {
            friction:0.5,
            restitution:0.3,
            density:1.2
            
        };
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("Images/paper.png");

        World.add(world,this.body);
    };
    display(no) {
        var pos = this.body.position;
        if (no === 2){
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,30,30);
       }
        else{
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius+20,this.radius+20);
        }
    };
};