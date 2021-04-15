var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
   bgImg=loadImage("images/garden.png");
   catAnimation=loadAnimation("images/cat2.png","images/cat3.png");
   cat1=loadAnimation("images/cat1.png");
   mouseAnimation=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
     cat = createSprite(800,700);
     mouse = createSprite(200,700);
     //cat.addImage()
     cat.addAnimation("cat1",catAnimation);
     mouse.addAnimation("mouse1",mouseAnimation);
     
     cat.scale=0.25;
     mouse.scale=0.25;
    }

function draw() {

    background(bgImg);
   
  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      mouse.addAnimation("mousehappy",mouseAnimation);
      mouse.changeAnimation("mousehappy");

      cat.addAnimation("cathappy",catAnimation);
      cat.changeAnimation("cathappy");
     }


      if(mouse.isTouching(cat)){
        cat.changeAnimation("sittingCat",cat1);
      }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseteasing",mouseAnimation);
      mouse.changeAnimation("mouseteasing");
      mouse.frameDelay = 25
      cat.x=cat.x-50;
  }

}
