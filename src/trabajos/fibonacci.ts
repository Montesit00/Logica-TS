export function Fibonacci(){
    //genero la secuencia de Fibonacci
    function generador(n: number): number[] {
      const secuencia: number[] = [0, 1];
      
      for (let i = 2; i < n; i++) {
        const nuevoNum = secuencia[i - 1] + secuencia[i - 2];
        secuencia.push(nuevoNum);
      }
      return secuencia;
    }
  
    //muestro la secuencia de Fibonacci
    function mostrarFibonacci(sequence: number[]): void {
      console.log("Secuencia de Fibonacci:");
      for (const num of sequence) {
        console.log(num);
      }
    }
    try {

      const input = prompt("Ingresa la cantidad de números que deseas generar:");
  
      if (input === null) {
        throw new Error("prompt vacío");
      }
  
      //paso a numero
      const n = parseInt(input);
  
      if (isNaN(n)) {
        throw new Error("Ingresa un número válido.");
      }
  
      // Genero la secuencia y la muestro
      const secuenciaFibonacci = generador(n);
      mostrarFibonacci(secuenciaFibonacci);
    } catch (error: any) {
      console.error(error.message);
    }
}
  
export default Fibonacci;
  