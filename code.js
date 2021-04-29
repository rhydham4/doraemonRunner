var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f860f7f6-90ae-4559-a28b-b2064cd4ee09","df07e33b-b2ea-41ed-bf08-60e8fec9299f","fc66b003-acbf-48f2-b12b-8ca0df183708","5d2bd881-ecc3-40b6-9398-dfd0556d51c6","046c466b-4359-4f3e-87bd-f6800108a3f8","5b0ac81a-f20e-4d89-86b5-84e9d4e3f8c0","23cd6455-f6d7-450b-aece-83aa0465fbab"],"propsByKey":{"f860f7f6-90ae-4559-a28b-b2064cd4ee09":{"name":"doremon1.png_1","sourceUrl":null,"frameSize":{"x":198,"y":243},"frameCount":6,"looping":true,"frameDelay":5,"version":"7lALy30Hd.IMwfLzRx.kRKpBeRm6R28B","loadedFromSource":true,"saved":true,"sourceSize":{"x":594,"y":486},"rootRelativePath":"assets/f860f7f6-90ae-4559-a28b-b2064cd4ee09.png"},"df07e33b-b2ea-41ed-bf08-60e8fec9299f":{"name":"doremon3.png_1","sourceUrl":null,"frameSize":{"x":183,"y":234},"frameCount":1,"looping":true,"frameDelay":12,"version":"PUGpbS_x.4U9FWW4hxX62r0ey7nCdrYk","loadedFromSource":true,"saved":true,"sourceSize":{"x":183,"y":234},"rootRelativePath":"assets/df07e33b-b2ea-41ed-bf08-60e8fec9299f.png"},"fc66b003-acbf-48f2-b12b-8ca0df183708":{"name":"farm_land_1","sourceUrl":null,"frameSize":{"x":398,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"CpVevf2Xz3jyqJmc3E2C8fPm777oxXZH","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":150},"rootRelativePath":"assets/fc66b003-acbf-48f2-b12b-8ca0df183708.png"},"5d2bd881-ecc3-40b6-9398-dfd0556d51c6":{"name":"sci_fi_1","sourceUrl":null,"frameSize":{"x":400,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"qeky7KhNKaVn6AeUIhV5LfQo5.wGe8T2","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":296},"rootRelativePath":"assets/5d2bd881-ecc3-40b6-9398-dfd0556d51c6.png"},"046c466b-4359-4f3e-87bd-f6800108a3f8":{"name":"images.jpg_1","sourceUrl":null,"frameSize":{"x":205,"y":141},"frameCount":1,"looping":true,"frameDelay":12,"version":"JJdQSaDRO3BAKpj8n2ei8BLcinwI2ZYq","loadedFromSource":true,"saved":true,"sourceSize":{"x":205,"y":141},"rootRelativePath":"assets/046c466b-4359-4f3e-87bd-f6800108a3f8.png"},"5b0ac81a-f20e-4d89-86b5-84e9d4e3f8c0":{"name":"cactus_1","sourceUrl":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png","frameSize":{"x":117,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png"},"23cd6455-f6d7-450b-aece-83aa0465fbab":{"name":"red_apple_1","sourceUrl":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png","frameSize":{"x":272,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"fMHBc6gLlWB588.zoou2w1zBXJtuuJKM","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating sky
var sky = createSprite(200,200,400,400)
sky.setAnimation("sci_fi_1")

//creating ground
var ground = createSprite(200,420,400,50)
ground.setAnimation("farm_land_1")
ground.velocityX = -3.5
//creating invisible ground
var invisibleGround = createSprite(200,380,400,50)
invisibleGround.visible = false
//creating doraemon sprite
var doraemon = createSprite(100,300,20,20)
doraemon.setAnimation("doremon1.png_1")
doraemon.scale = 0.4
//creeating cactus
var cactus = createSprite(300,340,30,20)
cactus.setAnimation("cactus_1")
cactus.scale = 0.3
cactus.velocityX = ground.velocityX
//adding sound to my game
playSound("assets/Doraemon-Theme-Song.mp3",true)

//creating overState
var gameState = "serve"
//creating score 
var score = 0;


function draw(){

  drawSprites()
  textSize(20)
  text(score,322,74)
  //increasing score
  if(ground.x = ground.x-3.5)
  {
    score = score+1
  }
  //defining a state to play
  if(gameState==="serve"){
    
    
  }
  //reseting the ground (infinity ground)
  if(ground.x<10){
    ground.x = ground.width/2
  }
  //jump jump and jump
  if(keyDown("space") && doraemon.y>=300 && gameState==="serve"){                                                                                                                                                                      
    doraemon.velocityY = -10
   
    doraemon.setAnimation("doremon3.png_1")
  }
  //walking doraemon
  if(doraemon.collide(invisibleGround)){
    doraemon.setAnimation("doremon1.png_1")
    doraemon.velocityX = 0
  }
   //adding gravity
   doraemon.velocityY = doraemon.velocityY +0.4
   //making cactus come back
   if(cactus.x<0){
     cactus.x=350
   }
   //losing mechanism
   if(doraemon.isTouching(cactus)){
      score = 0
     textSize(20)
     ground.x = 200
     text("game over",200,200)
     ground.velocityX = 0;
     cactus.velocityX = 0;
     doraemon.setAnimation("doremon3.png_1")
     gameState = "over"
   }
   //restarting mechanism
   if(keyDown("space") && gameState==="over"){
     ground.velocityX = -3.5
     cactus.velocityX = -3.5
     doraemon.setAnimation("doremon1.png_1")
     gameState="serve"
     
   }
   
    
  
   //colliding with grounds
   createEdgeSprites()
   doraemon.collide(invisibleGround)
    
   //viewing needed properties
   console.log("cactus.x = "+cactus.x)
  }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
