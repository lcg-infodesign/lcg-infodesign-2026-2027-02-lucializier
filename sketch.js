function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,176); //giallo
  //disegno glifi
  let numeroGlifi = 100;

  //griglia
  let numeroColonne = sqrt(numeroGlifi);
  let numeroRighe = sqrt(numeroGlifi);
  let dimColonna = windowWidth/numeroColonne;
  let dimRiga = windowHeight/numeroRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for(let i = 0; i<numeroGlifi; i++){
    mioGlifo(xCorrente +dimColonna/2, yCorrente + dimRiga/2, random(dimRiga/3, dimRiga-2));
    xCorrente = xCorrente + dimColonna;

    if(xCorrente>=windowWidth){
      xCorrente = 0;
      yCorrente = yCorrente+dimRiga;
    }

  }
}

function mioGlifo(x, y, size) {
  
  push()
  translate(x, y);
  
  let r = random(255);
  let g = random(255);
  let b = random(255); 
  fill(r, g, b);

  strokeWeight(3);

  circle(0, 0, size); //orologio

    
    //lancette
    angleMode(DEGREES); //gradi al posto che radianti
    
    fill (0);
    strokeWeight(1);

    //lancetta lunga
    const rotazione1 = random(360);
    const lancetta1W = random(size/15, size/13);
    const lancetta1H = random(size/4, size/2); 

    //lancetta corta
    const rotazione2 = random(360);
    const lancetta2W = random(size/13, size/11);
    const lancetta2H = random(size/12, size/4); 

    //lancetta lunga
    push();
    rotate(rotazione1);
    rect(0, 0, lancetta1W, lancetta1H);
    pop();

    //lancetta corta
    push();
    rotate(rotazione2);
    rect(0, 0, lancetta2W, lancetta2H);
    pop();
  pop()
}

function draw() {
}