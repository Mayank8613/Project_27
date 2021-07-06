class Rope  {
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bob1.body,
            bodyB : rope.body,
            stiffness : 0.04,
            length : 10
       }
        this.rope = Constraint.create(options);
       World.add(world,this.rope); }
       display(){
       strokeWeight(3);
       line(bob1.body.position.x, bob1.body.position.y,rope.body.position.x, rope.body.position.y);
    }
  
  };