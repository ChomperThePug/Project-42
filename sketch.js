var bg;
var ISS, ISSI;
var spaceC, spaceCI1, spaceCI2, spaceCI3, spaceCI4;

function preload() {
  bg = loadImage("Assets/spacebg.jpg");
  ISSI = loadImage("Assets/iss.png");
  spaceCI1 = loadImage("Assets/spacecraft1.png");
  spaceCI2 = loadImage("Assets/spacecraft2.png");
  spaceCI3 = loadImage("Assets/spacecraft3.png");
  spaceCI4 = loadImage("Assets/spacecraft4.png");
}

function setup() {
  createCanvas(800, 400);
  ISS = createSprite(300, 150);
  spaceC = createSprite(random(100,700), 350);
  spaceC.scale = 0.25;
}

function draw() {
  background(bg);
  ISS.addImage(ISSI);
  if (spaceC.y > 230 && spaceC.y < 240 && spaceC.x > 230 && spaceC.x < 240) {
    textAlign(CENTER);
    textSize(30);
    text("Docking Successful", 400, 300);
  }else{
    if (keyIsDown(DOWN_ARROW)) {
      spaceC.addImage(spaceCI2);
    }else if (keyIsDown(LEFT_ARROW)) {
      spaceC.addImage(spaceCI3);
      spaceC.x += -3.5;
    }else if (keyIsDown(RIGHT_ARROW)) {
      spaceC.addImage(spaceCI4);
      spaceC.x += 3.5;
    }else if (keyIsDown(UP_ARROW)) {
      spaceC.y -= 3.5;
    }else{
      spaceC.addImage(spaceCI1);
    }
  }

  drawSprites();
}