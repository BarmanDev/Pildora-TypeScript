// Condicional if
let edad: number = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


// Condicional else if 

let hora: number = 14;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}


//Operador ternario

let status2: string = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log(status2);

//Switch

let dia: number = 3;
let nombreDia: string;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    default:
        nombreDia = "Día no válido";
}

console.log(nombreDia);
