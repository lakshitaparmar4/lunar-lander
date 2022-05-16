let ground;
let lander;
var lander_img;
var bg_img;
var close;

var vx = 0;
var g = 0.01;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  if(lander.position.y>500){
    vy=0;
    lander.position.y=500;
    
    close();
   
  }

  else{

  
  vy +=g;
  lander.position.y+=vy;
  }
 
  drawSprites();
}

function close(){
  swal({
    title: `Game Over`,
    text: "You Have Perfectly Landed The Rover....!!!",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Thanks For Playing"
  });
}
