class Bob {

    constructor(x, y, diameter) {

        var options = {
            isStatic: false,
            restitution: 1,
            friction: 1,
            density: 1.0

        }


        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x, pos.y, this.diameter, this.diameter);


    }

    fly(){

        pos.x != mouseX;
        pos.y != mouseY;
    }
}