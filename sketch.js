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

function mioGlifo(x, y, larghezza, altezza) {
  
  push()

  translate(x, y);
  
  let r = random(255); //chiedere al prof come fare colori di una palette
  let g = random(255);
  let b = random(255); 
  fill(r, g, b);

  ellipse(0, 0, larghezza, altezza); //corpo insetto

  const larghezzaTesta = random(larghezza/3);
  const altezzaTesta = random(altezza/3);

  ellipse(0, altezza/2, larghezzaTesta, altezzaTesta); //testa
  
  //braccia
  angleMode(DEGREES); //gradi al posto che radianti

  const rotazione = random(360);
  const braccioW = random(xFine/16, xFine/14);
  const braccioH = random(yFine/4, yFine/2-2); 

  push();
  rotate(rotazione);
  line(0, 0, braccioW, braccioH);
  pop();



  pop();
}

function draw() {
}