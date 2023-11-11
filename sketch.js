var sound1
var sound2
function preload(){
  sound1 = loadSound("alex-productions-tech-tv-commercial-samsung-s21_Audio Trimmer.mp3") //把音樂檔載入
  sound2 = loadSound("47538_feveran_strong_rock.mp3") 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#ffe6e8");
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}

var w =100
var s_w=50
var fc,fc1
function draw() {
  background("#ffe6e8");
  rectMode(CENTER) //方框中心點為方框座標
  noFill()
  if(sound1.isPlaying())
  {
    fc = map(analyzer.getLevel(),0,1,0,100)
    fc1 = map(analyzer.getLevel(),0,1,0,200)
  }
  else
  {
    fc = map(mouseX,0,width,0,100)
  }
  for(var y=50;y<=height+50;y=y+w){
    for(var x=50;x<=width+50;x=x+w){
      stroke("#e78f8e")
      strokeWeight(2)
      ellipse(x,y,w+fc)
      //------框
      stroke("#cdb4db")
      strokeWeight(2)
      rect(x,y,w+fc)
      //-----小圓
      stroke("#a2d2ff")
      strokeWeight(2)
      ellipse(x+50,y+50,s_w+fc)
    }
  }
  fill("#a2d2ff")
  noStroke() //無框
  ellipse(mouseX,mouseY,100) //隨著滑鼠移動的圓
  fill("#cdb4db")
  ellipse(mouseX-50,mouseY-50,50)
  fill("#fcf6bd")
  ellipse(mouseX+50,mouseY-50,50)

    if(mouseIsPressed){ //如果滑鼠被按下
      ellipse(mouseX,mouseY,100) //隨著滑鼠移動的圓
      fill("#ffea00")
      ellipse(mouseX-50,mouseY-50,50)
      fill("#ff7b00")
      ellipse(mouseX+50,mouseY-50,50)

      fill("#00296b")
      text("wwtt",mouseX,mouseY)
      textSize(50)
      }
    fill("#a05088")
    text("wwtt",mouseX,mouseY)
    textSize(50)
    

  
}

function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
    sound2.play()
  }else{
    sound1.play()
    sound2.stop()
  }

}