class Rubber{
	constructor(x,y,r) {
		var options = {
			restitution: 0.3,
			friction: 5,
			density: 1
	}
		this.r=r
		this.body=Bodies.circle(x, y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r, this.r);

			pop()
	}

}