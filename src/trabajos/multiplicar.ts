export function multiplicar(){
    //Mostar la tabla
    function tabla(numero: number): void {
        console.log(`Tabla de multiplicar del ${numero}:`);
        
        // Recorrer y imprimo
        for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
        }
    }
  
    try {
        const input = prompt("Ingresa un número para mostrar su tabla de multiplicar:");
    
        // Prompt null
        if (input === null) {
        throw new Error("La entrada fue cancelada.");
        }
    
        // Convierto a numero
        const numeroIngresado = parseFloat(input);
    
        if (isNaN(numeroIngresado)) {
        throw new Error("Por favor, ingresa un número válido.");
        }
    
        //Muestro la tabla del numero ingresado
        tabla(numeroIngresado);
    }catch (error: any) {
        console.error(error.message);
    }
}

export default multiplicar;