class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }
  calcularArea() {
    return this.largura * this.altura;
  }
  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }


}




const retangulo1 = new Retangulo(5, 3);
console.log(retangulo1.calcularArea()); // Saída: 15
console.log(retangulo1.calcularPerimetro()); // Saída: 16


console.log(retangulo1.largura); // Saída: 5
console.log(retangulo1.altura); // Saída: 3


function calcular() {

}