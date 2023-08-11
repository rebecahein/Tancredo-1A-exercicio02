let cor;
let posicaohorizontal;
let posicaovertical;

function setup() {
  createCanvas(400, 400);
  background('red');
  cor = color(random(0,255),random(0,255), random(0,255))
  posicaohorizontal = 100;
  posicaovertical =200
}

function draw() {
  fill(cor);
  circle(posicaohorizontal,posicaovertical, 50);
  
  if(mouseX < posicaohorizontal) {posicaohorizontal -= 1}
  if(mouseX > posicaohorizontal) {posicaohorizontal += 1} 
  if(mouseY < posicaovertical)   {posicaovertical -= 1}                           
  if(mouseY > posicaovertical)   {posicaovertical += 1}
  
  if(mouseIsPressed)  cor = color (random(0,255),random(0,255), random(0,255)), (random(0,100))
                                                                                       
  
 
     
}