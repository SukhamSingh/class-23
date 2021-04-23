class Ground{
    constructor(){
        this.ground = Bodies.rectangle(200,390,400,20,{isStatic:true})
        World.add(world,this.ground);
    }
    display(){
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,400,20);
    }
}