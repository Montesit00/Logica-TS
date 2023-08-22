export function generar(){
    // Función para convertir de Celsius a Fahrenheit
function celsiusaFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }
  
  // Función para convertir de Fahrenheit a Celsius
  function fahrenheitaCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
  }
  
  try {
    //doy a elegir dos opciones
    const opcion = prompt("Elige una opción:\n1. Convertir de Celsius a Fahrenheit\n2. Convertir de Fahrenheit a Celsius");
    
    if (opcion === null) {
      throw new Error("Opción no valida.");
    }
    //paso a numero
    const opcionNum = parseInt(opcion);
    //valido q sea 1 o 2
    if (isNaN(opcionNum) || opcionNum < 1 || opcionNum > 2) {
      throw new Error("Ingresa una opción válida (1 o 2).");
    }
    //ingresar temperatura
    const tempString = prompt("Ingresa la temperatura:");
  
    if (tempString === null) {
      throw new Error("Entrada de temperatura cancelada.");
    }
    //paso a numero
    const temperatura = parseFloat(tempString);
  
    if (isNaN(temperatura)) {
      throw new Error("Ingresa una temperatura válida.");
    }
    //hago la conversión y muestro el resultado
    if (opcionNum === 1) {
      const fahrenheit = celsiusaFahrenheit(temperatura);
      console.log(`${temperatura} °C es igual a ${fahrenheit.toFixed(2)} °F`);
    } else {
      const celsius = fahrenheitaCelsius(temperatura);
      console.log(`${temperatura} °F es igual a ${celsius.toFixed(2)} °C`);
    }
  } catch (error: any) {
    console.error(error.message);
  }
}

export default generar;