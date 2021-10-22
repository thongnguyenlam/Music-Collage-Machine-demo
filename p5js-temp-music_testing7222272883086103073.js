var moon, butterfly, butterfly2, uh, mountain, grass, drummer, dancer, bell, oldman;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255, 210, 97); 
}

function preload() {
  moon=loadImage("data/moon.png");
  butterfly=loadImage("data/butterfly.png");
  butterfly2=loadImage("data/butterfly2.png");
  uh=loadImage("data/uh.png")
  mountain=loadImage("data/mountain.png")
  grass=loadImage("data/grass.png")
  drummer=loadImage("data/drummer.png");
  dancer=loadImage("data/dance.png");
  bell=loadImage("data/bell.png")
  oldman=loadImage("data/oldman.png");  
}

function draw() {
  image(moon, 1000, -170, 1000, 800);
  image(butterfly, 1600, 100, 950, 700);
  image(butterfly2, -50, -70, 700, 700);
  image(uh, 500, 450, 600, 600);
  image(mountain, 1200, 250, 1300, 1300);
  image(grass, -10, 100, 2600, 1300);
  image(drummer, -30, 350, 1000, 1000);
  image(dancer, 1270, 350, 800, 800);
  image(bell, 800, 150, 800, 800);
  image(oldman, 350, 0, 800, 800);
}

  
  
