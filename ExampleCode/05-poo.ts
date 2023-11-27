// Cramos el objeto Rectangulo
class Rectangulo{
// Le damos los atributos que va a tener el rectangulo
    ancho: number;
    alto: number;
// Creamos un constructor que es como un molde para crear Rectangulos
    constructor(ancho: number, alto: number){
        this.ancho = ancho;
        this.alto = alto
    }
// Le pedimos que nos calcule el area
    area(){
        return this.alto * this.ancho;
    }
// Le pedimos que nos calcule el perimtero
    perimetro(){
        return this.ancho * 2 + this.alto * 2;
    }

}

// Creamos con el costructor un rectangulo que va a tener 15 de ancho y 5 de largo
let miRectangulo = new Rectangulo(15,5);

// Imprimimos los resultados por consola.
console.log(`El rectangulo tiene un area de: ${miRectangulo.area()} `);
console.log(`El rectangulo tiene un perimetro de: ${miRectangulo.perimetro()}`);