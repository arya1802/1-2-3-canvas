var a,ad;
var drawing=[];
var database;








function setup() {
  createCanvas(1200,800);
  database=firebase.database();
  clear=createButton("clear");
  clear.position(600,50);
}

function draw() {
  background("black");  
  
for(var i=0;i<drawing.length;i++){
  stroke('purple'); 
  strokeWeight(10); 
  point(drawing[i].x,drawing[i].y);
}
clear.mousePressed(()=>{
drawing=[];
database.ref("drawing").remove();
location.reload();


})
  drawSprites();
}
function mouseDragged(){
var point={
x:mouseX,
y:mouseY
}
drawing.push(point);
database.ref("drawing").set({d:drawing})



}


