class division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 10;
      this.height = 300;
      World.add(world, this.body);
     

    }
    display(){
      
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      for(var k; k<= width;k=k+80) {
        divisions.push(new division(k,height-divisionheight/2,10,divisionheight))
      }
    }
  };
