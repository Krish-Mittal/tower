class bar {
    constructor(x,y,w,h)
    {
     var op=
     {
         isStatic:false
     }
     this.body=Body.rectangle(x,y,w,h,op);
     this.h=h;
     this.w=w;
     World.add(world,this.body);
     this.Visibility=255;
    }
    display()
    {
        console.log(this.body.speed);
        if(this.body.speed < 3){
         fill("red")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 0.2;
          tint(255,this.Visiblity);
          pop();
        }        
    }
}