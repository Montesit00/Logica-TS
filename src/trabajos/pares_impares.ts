export function paresImpares(){

    const rangoInicio = prompt("Ingresa el número de inicio del rango:");
    const rangoFinal = prompt("Ingresa el número final del rango:");
    
    if (rangoFinal === null) {
        return;
    }
  
    if (rangoInicio === null) {
        return;
    }

    const inicio = parseInt(rangoInicio);
    // Convierto a números enteros
    const fin = parseInt(rangoFinal);
  

    // Verifico que los valores sean números válidos
    if (isNaN(inicio) || isNaN(fin)) {
    console.log("Por favor, ingresa números válidos.");
    return;
            
    }

    var contadorPar = 0;
    var contadorImpar = 0;
  
    // Recorro el rango y cuento los números pares e impares
    for (let num = inicio; num <= fin; num++) {
      if (num % 2 === 0) {
        contadorPar++;
      } else {
         contadorImpar++;
      }
    }
      
    console.log(`Cantidad de números pares: ${contadorPar}`);
    console.log(`Cantidad de números impares: ${contadorImpar}`);
  }
      
export default paresImpares;