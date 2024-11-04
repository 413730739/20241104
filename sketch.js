function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
}

function draw() {
  background("#caf0f8");
  noFill()
  stroke("#0077b6")
  strokeWeight(2)
  triangle(25, 0, 0, 50, 50,50);
  rect(0,0,50,50)
  ellipse(50,50,25,40)
  rect(12.5,12.5,25,25)

  var rect_width=50 //宣告一個變數RECTWIDTH 方形的寬度
  var c_w=25
  var c1_w=40
  var t_w=25
  let circleSize = map(mouseY, 0, height, 1, 50); 
  let rectSize = map(mouseX, width, height, 1, 100);

   

  for(let y=0;y<windowHeight;y=y+1){
      for(let i=0;i<windowWidth;i=i+1){
    triangle(25+(t_w+25)*i, 0+50*y, 0+(t_w+25)*i, 50+50*y, 50+(t_w+25)*i,50+50*y);
       for(let i=0;i<10;i=i+1){
         let r=map(sin(frameCount),-1,1,50,25)
         let g=map(cos(frameCount),-1,1,50,150)
         let b=map(sin(frameCount/2),-1,1,50,255)
    
         stroke(r,g,b)
     }
     
    rect(rect_width*i,0+50*y, rectSize*2)
    for(let i=0;i<10;i=i+1){
      let r=map(sin(frameCount),-1,1,50,25)
      let g=map(cos(frameCount),-1,1,50,50)
      let b=map(sin(frameCount/2),-1,1,50,50)
 
      stroke(r,g,b)}
    ellipse((c_w+25)*i,50+50*y,c_w,circleSize)
    for(let i=0;i<10;i=i+1){
      let r=map(sin(frameCount),-1,1,50,15)
      let g=map(cos(frameCount),-1,1,50,225)
      let b=map(sin(frameCount/2),-1,1,50,255)
 
      stroke(r,g,b)}
    rect(12.5+rect_width*i,12.5+50*y, rectSize)
    for(let i=0;i<10;i=i+1){
      let r=map(sin(frameCount),-1,1,50,25)
      let g=map(cos(frameCount),-1,1,50,115)
      let b=map(sin(frameCount/2),-1,1,50,225)
 
      stroke(r,g,b)}
  }
}
}
  

    
  