var canvas;
var music;
var rect1;
var rect2;
var rect3;
var rect4;
var ball;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor="white";
    ball.velocityY = 4;
    ball.velocityX = 4;
    rect1 = createSprite(49,595,120,20);
    rect1.shapeColor = "red";
    rect2 = createSprite(220,595,120,20);
    rect2.shapeColor ="orange";
    rect3 = createSprite(380,595,120,20);
    rect3.shapeColor ="yellow";
    rect4 = createSprite(549,595,120,20);
    rect4.shapeColor ="green";



    
}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    ball.bounceOff(edges);


    if(rect1.isTouching(ball)&&ball.bounceOff(rect1)){
        ball.shapeColor = "red";
        music.play();
     }
     if(rect2.isTouching(ball)&&ball.bounceOff(rect2)){
        ball.shapeColor = "orange";
     }
     
     if(rect3.isTouching(ball)&&ball.bounceOff(rect3)){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();

     }
     if(rect4.isTouching(ball)&&ball.bounceOff(rect4)){
        ball.shapeColor = "green";
     }

drawSprites();
}
