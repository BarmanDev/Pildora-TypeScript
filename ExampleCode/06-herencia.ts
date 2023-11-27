// Cleamos un objeto persona 
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Creamos la clase Estudiante que hereda de persona ahorrandonos duplicar código
class Estudiante extends Persona {
    // Añadimos la propiedad curso
    curso: string;

    constructor(nombre: string, edad: number, curso: string) {
        super(nombre, edad); // con super cogemos los atributos de la herencia
        this.curso = curso;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando en el curso de ${this.curso}.`);
    }
}

// Creamos la clase Empleado que hereda de persona ahorrandonos duplicar código
class Empleado extends Persona {
    //Añadimos la propiedad que queremos para el Empleado
    puesto: string; 

    constructor(nombre: string, edad: number, puesto: string) {
        super(nombre, edad); // con super cogemos los atributos de la herencia
        this.puesto = puesto;
    }

    trabajar() {
        console.log(`${this.nombre} trabaja como ${this.puesto}.`);
    }
}

// Ejemplo de uso
const estudiante = new Estudiante("Juan", 20, "Informática");// creamos el estudiante
estudiante.presentarse(); 
estudiante.estudiar();

const empleado = new Empleado("María", 30, "Desarrolladora");// creamos una empleada 
empleado.presentarse();
empleado.trabajar();
