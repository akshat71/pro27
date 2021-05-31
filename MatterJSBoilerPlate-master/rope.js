class   Rope{
    constructor(bodyA,pointB,offsetx,offsety){
        this.offsetx=offsetx
        this.offsety=offsety
        var options={
            bodyA:bodyA,
            pointB:{x:this.offsetx,y:this.offsety},
        
            'stiffness':1.2,
            'length':250

            
        }
        
        this.rope=Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.rope)
    }
    display(){
push()
stroke(48,22,8)
strokeWeight(3)
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
pop()
    }

    fly(){
        this.rope.bodyA=null
    }
    
}