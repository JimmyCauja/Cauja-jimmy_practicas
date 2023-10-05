let p1;
let p2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p1 = new Pelota(200, 200 * 0.2, 20);
  p2 = new Pelota(300, 200 * 0.2, 20);
}

function draw() {
  background(255, 150, 70);
  noStroke();
  fill(100, 50, 0);
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight - 60, windowWidth, 50);
  p1.actualizar();
  p1.display();
  p2.actualizar();
  p2.display();

}

class Pelota {
  constructor(posX, posY, diametro) {
    this.posX = posX;
    this.posY= posY;
    this.diametro = diametro;
    this.radio = this.diametro / 2;
    this.velocidad = 0;
    this.esp = 50;
    this.margen = 60;
    this.aceleracion = 0.98;
    this.piso = windowHeight - this.margen - this.esp /2;
  }

  actualizar() {
    this.velocidad += this.aceleracion;
    this.posY += this.velocidad;

    if (this.posY >= this.piso - this.radio) {
      this.velocidad *= -1;
      this.posY += this.velocidad;
    }
  }

  display() {
    fill(255, 100, 0);
    circle(this.posX, this.posY, this.diametro, this.diametro);
    
  }
}
