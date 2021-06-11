class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
           stiffness: 0.004,
            length: 20,
        }
       /* this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');*/
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
     
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
      
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 4000) {
                strokeWeight(7);
                line(pointA.x - 11, pointA.y, pointB.x -2, pointB.y);
            
              
            }
            else{
                strokeWeight(7);
                line(pointA.x + 4, pointA.y, pointB.x -1, pointB.y);
         
             
            }
           
            
            pop();
        }
    }
    
}