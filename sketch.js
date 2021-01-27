var tom,tomSitting,tomStanding,tomRunning;
var jerry,jerryGift,jerryStanding,jerryTeasing;

function preload() {
    //load the images here
    gardenImage = loadImage("garden.png");

    tomSitting = loadAnimation("cat1.png");
    tomStanding = loadAnimation("cat4.png");
    tomRunning = loadAnimation("cat2.png","cat3.png");

    jerryGift = loadAnimation("mouse1.png");
    jerryStanding = loadAnimation("mouse4.png");
    jerryTeasing = loadAnimation("mouse2.png","mouse3.png");


}

function setup(){
    createCanvas(750,750);
    //create tom and jerry sprites here

    tom = createSprite(625,650);
    tom.addAnimation("running",tomSitting);
    tom.scale = 0.1;

    jerry = createSprite(75,650);
    jerry.addAnimation("teasing",jerryGift);
    jerry.scale = 0.1;

}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide

    if (tom.x - jerry.x < (tom.width - jerry.width)/2) {
        
        tom.velocityX = 0;
        tom.x = 125;
        tom.addAnimation("running",tomStanding);

        jerry.addAnimation("teasing",jerryStanding);

    }


    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here

if (keyCode === LEFT_ARROW) {
    tom.velocityX = -5;
    tom.addAnimation("running",tomRunning);

    jerry.addAnimation("teasing",jerryTeasing);
}
}
