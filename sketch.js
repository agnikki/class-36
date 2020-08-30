var gameState=0,playerCount,database;
var form,game,player;
var allPlayer;
var distance=0;
var car1,car2,car3,car4,cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20, displayHeight-25);
  
  game=new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  if(playerCount===4){
   game.update(1);
  }
  if (gameState===1){
    game.play();
  }
  if(gameState===2){
    game.end();
  }
    drawSprites();
    
  
}


