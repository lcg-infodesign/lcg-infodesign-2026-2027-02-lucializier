function setup() {
  createCanvas(windowWidth, windowHeight);
  background(86, 115, 86); //verde
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
  push();
  translate(x, y);
  fill(0);
  
  // corpo
  const altezzaIns = random(size * 0.4, size * 0.8);
  const larghezzaIns = random(size * 0.1, altezzaIns * 0.7); 
  
  // testa
  const larghezzaTesta = random(larghezzaIns * 0.4, larghezzaIns * 0.8);
  const altezzaTesta = random(larghezzaTesta * 0.6, larghezzaTesta * 1.2);
  
  //zampe
  let numZampe = random([4, 6]); 
  let spessoreZampa = random(larghezzaIns * 0.05, larghezzaIns * 0.1); 
  let lunghezzaZampa = random(larghezzaIns, larghezzaIns * 1.4);
  stroke(0);
  strokeWeight(spessoreZampa);
  strokeCap(ROUND); 
  angleMode(DEGREES);

  //2 zampe
  if (numZampe >= 2) {
    // Destra
    push(); rotate(-45); line(0, 0, lunghezzaZampa, 0); pop();
    // Sinistra
    push(); rotate(-135); line(0, 0, lunghezzaZampa, 0); pop();
  }
  
  // 4 zampe
  if (numZampe >= 4) {
    // Destra
    push(); rotate(45); line(0, 0, lunghezzaZampa, 0); pop();
    // Sinistra
    push(); rotate(135); line(0, 0, lunghezzaZampa, 0); pop();
  }
  
  // 6 zampe
  if (numZampe === 6) {
    // Destra
    push(); rotate(0); line(0, 0, lunghezzaZampa, 0); pop();
    // Sinistra
    push(); rotate(180); line(0, 0, lunghezzaZampa, 0); pop();
  }
  //corpo
  noStroke(); 
  ellipse(0, 0, larghezzaIns, altezzaIns); 

  //Testa
  ellipse(0, -altezzaIns/2 - altezzaTesta/4, larghezzaTesta, altezzaTesta); 

  pop();
}

function draw() {
}