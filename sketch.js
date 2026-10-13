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

function mioGlifo(x, y) {
  
  push()

  translate(x, y);
  
  let r = random(255); //chiedere al prof come fare colori di una palette
  let g = random(255);
  let b = random(255); 
  fill(r, g, b);

  const larghezzaIns = random(dimRiga/8, dimRiga/4);
  const altezzaIns = random(dimColonna/6, dimColonna/2);
  ellipse(0, 0, larghezzaIns, altezzaIns); //corpo insetto

  const larghezzaTesta = random(larghezzaIns/6, larghezzaIns/3);
  const altezzaTesta = random(altezzaIns/6, altezzaIns/3);

  ellipse(0, altezza/2, larghezzaTesta, altezzaTesta); //testa
  
  //zampe
  angleMode(DEGREES); //gradi al posto che radianti

  const rotazione = random(360);
  const braccioW = random(larghezzaIns/16, larghezzaIns/14);
  const braccioH = random(altezzaIns/4, altezzaIns/2); 

  push();
  rotate(rotazione);
  rectMode(CENTER);
  rect(0, 0, braccioW, braccioH);
  pop();



  pop();
}

function draw() {
}