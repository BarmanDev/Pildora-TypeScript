// Números
let numero: number = 42;
let decimal: number = 3.14;

// Texto
let cadena: string = "Hola, mundo";

// Booleanos
let verdadero: boolean = true;
let falso: boolean = false;

// Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let palabras: string[] = ["manzana", "banana", "cereza"];

// Tuplas 
let tupla: [string, number] = ["hola", 42];

// Enumeraciones
enum Colores {
  Rojo,
  Verde,
  Azul,
}

let color: Colores = Colores.Verde;

// Objeto
let persona: { nombre: string, edad: number } = {
  nombre: "Juan",
  edad: 30,
};

// Tipos personalizados
type Punto = { x: number, y: number };
let punto: Punto = { x: 10, y: 20 };

// Tipos de unión
let resultado: number | string = 42;
resultado = "¡Hola!";

// Tipos nulos o indefinidos
let valor: number | null | undefined = 10;
valor = null;

// Funciones
function sumar(a: number, b: number): number {
  return a + b;
}

// Tipos genéricos
function obtenerPrimero<T>(arr: T[]): T {
  return arr[0];
}

// Tipo "any" ¡no lo uses nunca!
let variableAny: any = "Esto podría ser cualquier cosa";


// Operadores de comparación

let x: number = 5;
let y: number = 10;

console.log(x == y);   // false
console.log(x === y);  // false
console.log(x != y);   // true
console.log(x !== y);  // true
console.log(x < y);    // true
console.log(x > y);    // false
console.log(x <= y);   // true
console.log(x >= y);   // false
