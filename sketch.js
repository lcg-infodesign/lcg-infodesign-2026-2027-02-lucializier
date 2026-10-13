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

  angleMode(DEGREES);
  rotate(random(360));

  //colori
  let palette = [
    color(75, 50, 62),   // Viola
    color(140, 115, 80), // Sabbia 
    color(145, 110, 40),  // Senape 
    color(130, 65, 45),  // Terracotta
    color(64, 42, 34)     // Marrone 
  ];
  let colore = random(palette);
  
  // corpo
  const altezzaIns = random(size * 0.4, size * 0.8);
  const larghezzaIns = random(size * 0.1, altezzaIns * 0.7); 
  
  // testa
  const larghezzaTesta = random(larghezzaIns * 0.6, larghezzaIns * 0.8);
  const altezzaTesta = random(larghezzaTesta * 0.8, larghezzaTesta * 1.2);
  
  //zampe
  let numZampe = random([4, 6]); 
  let spessoreZampa = random(larghezzaIns * 0.1, larghezzaIns * 0.15); 
  let lunghezzaZampa = random(larghezzaIns, larghezzaIns * 1.3);
  
  //intero insetto
  fill(colore);
  stroke(30, 15, 10); //marrone scuro
  strokeWeight(1);

  //disengo zampe
  let raggioAngoli = spessoreZampa / 2;

  //2 zampe
  if (numZampe >= 2) {
    push();    // Destra
    rotate(-45); 
    rect(0, -spessoreZampa/2, lunghezzaZampa, spessoreZampa, raggioAngoli);
    pop();
    push();    // Sinistra
    rotate(-135); 
    rect(0, -spessoreZampa/2, lunghezzaZampa, spessoreZampa, raggioAngoli);
    pop();
  }
  
  // 4 zampe
  if (numZampe >= 4) {
    push(); //Destra
    rotate(45); 
    rect(0, -spessoreZampa/2, lunghezzaZampa, spessoreZampa, raggioAngoli);
    pop();
    push();   // Sinistra
    rotate(135); 
    rect(0, -spessoreZampa/2, lunghezzaZampa, spessoreZampa, raggioAngoli);
    pop();
  }
  
  // 6 zampe
  if (numZampe === 6) {
    push(); // Destra
    rotate(0); 
    rect(0, -spessoreZampa/2, lunghezzaZampa, spessoreZampa, raggioAngoli);
    pop();
    push(); //Sinistra
    rotate(180); 
    rect(0, -spessoreZampa/2, lunghezzaZampa, spessoreZampa, raggioAngoli);
    pop();
  }
  // disegno corpo
  ellipse(0, 0, larghezzaIns, altezzaIns); 

  //disegno Testa
  ellipse(0, -altezzaIns/2 - altezzaTesta/4, larghezzaTesta, altezzaTesta); 
  pop();
}

function draw() {
}