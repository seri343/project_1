var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x00BCFF});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var player = new PIXI.Sprite(PIXI.Texture.fromImage("blob.png"));
var enemy1 = new PIXI.Sprite(PIXI.Texture.fromImage("human.png"));
var enemy2 = new PIXI.Sprite(PIXI.Texture.fromImage("human.png"));
var enemy3 = new PIXI.Sprite(PIXI.Texture.fromImage("human.png"));
var enemy4 = new PIXI.Sprite(PIXI.Texture.fromImage("human.png"));
var enemy5 = new PIXI.Sprite(PIXI.Texture.fromImage("human.png"));
var enemy6 = new PIXI.Sprite(PIXI.Texture.fromImage("human.png"));
var enemy7 = new PIXI.Sprite(PIXI.Texture.fromImage("human.png"));

player.position.x = 100;
player.position.y = 100;
stage.addChild(player);

var enemies = new PIXI.Container();
enemies.position.x = 200;
enemies.position.y = 200;
stage.addChild(enemies);

enemies.addChild(enemy1);
enemy1.anchor.x = 0.5;
enemy1.anchor.y = 0.5;
enemy1.position.x = 0;
enemy1.position.y = 0;

enemies.addChild(enemy2);
enemy2.anchor.x = 0.5;
enemy2.anchor.y = 0.5;
enemy2.position.x = 110;
enemy2.position.y = 110;

var enemies_subgroup = new PIXI.Container();
enemies_subgroup.position.x = 70;
enemies_subgroup.position.y = 70;
enemies.addChild(enemies_subgroup);

enemies_subgroup.addChild(enemy3);
enemy3.anchor.x = 2;
enemy3.anchor.y = 2;
enemy3.position.x = 0.5;
enemy3.position.y = 0.5;

var more_enemies = new PIXI.Container();
more_enemies.position.x = 60;
more_enemies.position.y = 60;
stage.addChild(more_enemies);

more_enemies.addChild(enemy4);
enemy4.anchor.x = 0.5;
enemy4.anchor.y = 0.5;
enemy4.position.x = 0;
enemy4.position.y = 0;

more_enemies.addChild(enemy5);
enemy5.anchor.x = 0.5;
enemy5.anchor.y = 0.5;
enemy5.position.x = 110;
enemy5.position.y = 150;

var another_enemies = new PIXI.Container();
another_enemies.position.x = 350;
another_enemies.position.y = 350;
stage.addChild(another_enemies);

another_enemies.addChild(enemy6);
enemy6.anchor.x = 0.5;
enemy6.anchor.y = 0.5;
enemy6.position.x = 0;
enemy6.position.y = 0;

another_enemies.addChild(enemy7);
enemy7.anchor.x = 0.5;
enemy7.anchor.y = 0.5;
enemy7.position.x = 200;
enemy7.position.y = 200;


function keydownEventHandler(e) {

  if (e.keyCode == 87) { // W key
    player.position.y -= 10;
  }

  if (e.keyCode == 83) { // S key
    player.position.y += 10;
  }

  if (e.keyCode == 65) { // A key
    player.position.x -= 10;
  }

  if (e.keyCode == 68) { // D key
    player.position.x += 10;
  }
}

document.addEventListener('keydown', keydownEventHandler);


function animate() {
  requestAnimationFrame(animate);
  
  enemies.rotation += 0.01;
  
  enemies_subgroup.rotation += 0.02;
  
  more_enemies.rotation += 0.015;

  another_enemies.rotation += 0.03;
  
  renderer.render(stage);
}
animate();
