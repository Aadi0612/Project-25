class paper{
	constructor(x,y,r)
	{
	var options = {
        isStatic: false,
		restition:0.3,
		friction:0,
		density:1.2
	}
	    this.image=loadImage("paper.png");
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-50)/2, options)
		World.add(world, this.body);
        

	}
	display()
	{
			var paperpos =this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
           fill("white")
            ellipse(0,0,this.r,this.r);
            imageMode(CENTER);
			image(this.image, 0,0,this.width,this.height)
			image.scale = 0.5
			pop()
	}

}