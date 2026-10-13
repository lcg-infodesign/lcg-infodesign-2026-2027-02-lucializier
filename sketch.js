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
    const miaRotazione = random(360);
    const mialancettaw = random(size/12, size/10);
    const mialancettah = random(size/10, size/2);
    
    fill (0);
    strokeWeight(1);

    push()
    rotate(miaRotazione);
    rect(0, 0, mialancettaw, mialancettah);
    pop()

    push()//perché non funziona la seconda lancetta? Risolvere domani
    rotate(miaRotazione);
    rect(0, 0, mialancettaw, mialancettah);
    pop()

  pop()
}

function draw() {
}