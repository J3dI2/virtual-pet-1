//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogPosition

function preload(){
  //load images here
  dog = loadImage("images/doglmg.png");
  happyDog = loadImage("images/doglmg1.png");
}

function setup() {
	createCanvas(500,500);
  
  dogPosition = createSprites(width/2, height/2,25,25);
  dogPosition.addImage(dog);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
  textSize(25);
  fill("white");
  stroke("black");
  text("Food remaining:" + foodStock, dogPosition.x,dogPosition.y-50);
}
//Function to read values from DB
function readStock(data){
  foodS=data.val();
}
//Function to wreite values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').updata({
    Food:x
  })
}