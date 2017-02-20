 var diameter;
 var angle = 0
 var d2 
function setup() {
  createCanvas(800,600);
  angleMode(RADIANS);
  noStroke();
  fill(255,204,0);
 
  diameter = height-200
}

function draw() {
  background(0)
  textSize(22)
  fill(255,204,0)
  text("keep pressing the mouse",285,550)
 
 
 if (mouseIsPressed == true){
  
   
     d2= sin(angle)* diameter/2 + diameter/2
   
   
  }else{
    if (angle > PI){
    angle = PI
    }
   d2= sin(angle +PI/2)* diameter/2 + diameter/2
  
  }
  ellipse(width/2, height/2, d2, d2)
  angle += 0.005
  
  function mouseClicked(){
    if(angle <= PI){
     angle = PI/2-angle
    } 
    
    if(angle>PI){
     angle = -PI/2
     
   }
  }
  
    
  }