var dog, dogImg, dogImg1, database, foodS, foodStock;

function preload(){
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  firebase.set(20);

  dog = createSprite(250,350,10,60);
  dogImg.addImage(dogImg);
  dog.scale = 0.2;
}


function draw() {  
  background("green");
  
  if(foodS !== undefined){
    textSize(20);
    fill(255)
    text("Note = Press UP ARROW to feed drago milk", 50,50);
    text("Food Remaining: "+foodS, 150,150);


    if(KeyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogImg);
    }


    if(KeyWentUp(UP_ARROW)){
      dog.addImage(dogImg);
    }


    if(foodS == 0){
      foodS = 20;
    }
  }

  drawSprites();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref("/").update({
    Food:x
  })
}

function readStock(data){
  foodS = data.val();
}


