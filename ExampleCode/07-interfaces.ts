// Las interfaces son como moldes para la creación de los objetos siempre deben de cumplir
// lo que está dentro.
interface Vehiculo {
    // Atributos que van a tener los vehiculos
    marca: string;
    modelo: string;
    velocidadActual: number;

    // Funcionalidades que hace la moto
    acelerar(): void;
    frenar(): void;
    girar(): void;
}

// Cramos la clase moto implementando la interfaz de arriba 
class Moto implements Vehiculo {
    marca: string;
    modelo: string;
    velocidadActual: number;

    // Los constructores son como moldes donde se van a crar las motos 
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }

    acelerar() {
        this.velocidadActual = 10;
        console.log(`La moto ${this.marca} ${this.modelo} acelera a ${this.velocidadActual} km/h.`);
    }

    frenar() {
        this.velocidadActual = -5;
        console.log(`La moto ${this.marca} ${this.modelo} frena a ${this.velocidadActual} km/h.`);
    }

    girar() {
        console.log(`La moto ${this.marca} ${this.modelo} gira.`);
    }
}

const miMoto = new Moto("Honda", "CBR"); //-> creamos la moto a partir del constructos
miMoto.acelerar(); //-> Llamamos a la funcionalidad creada
miMoto.frenar(); //-> Llamamos a la funcionalidad creada
miMoto.girar(); //-> Llamamos a la funcionalidad creada
