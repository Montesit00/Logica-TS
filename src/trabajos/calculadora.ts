function getPrompt(promptTexto: string): number {
    // Se pide el valor por pront
    const userInput: string | null = prompt(promptTexto);

    if (userInput === null) {
        throw new Error("prompt null");
      }

    // Lo parseo para obtener un numero
    const num = parseInt(userInput);
    
    if (isNaN(num)){throw new Error("No es un número")}
    
    return num;
  }
  
export function calculadora() {
    try {
      const num1 = getPrompt("Ingresar el primer número:");
      const num2 = getPrompt("Ingrese el segundo número:");
  
      console.log(`Suma: ${num1 + num2}`);
      console.log(`Resta: ${num1 - num2}`);
      console.log(`Multiplicación: ${num1 * num2}`);
      console.log(`Divición: ${num1 / num2}`);
    } catch (error: any) {
        //any: indica que la variable puede tener cualquier valor
      console.error(error.message);
    }
  }
  

export default calculadora;
