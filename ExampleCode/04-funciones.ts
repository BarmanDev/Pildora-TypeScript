
// Creamos una funcion llamada sumarNumero y que por parametro tenga dos numeros
// tipo number y obligamos que siempre sea de tipo number el resultado
function sumarNumeros(a: number, b: number): number {
    return a + b;
  }
  
  const resuladoSuma = sumarNumeros(5, 3);

  console.log(`La suma es: ${resuladoSuma}`);