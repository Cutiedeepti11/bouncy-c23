class ground{
    constructor(){
        var ground_options={
        isStatic:true
        }
        this.ground=Bodies.rectangle(200,200,200,20,ground_options);
        World.add(world,this.ground);
    
    }
    display(){
        var gr=this.ground.position;
        rectMode(CENTER);
        rect(gr.x,gr.y,200,20);
    }
}