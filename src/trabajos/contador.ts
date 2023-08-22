export function contar(){
    try {
        //Pido que ingrese una oracion
        const oracion = prompt("Ingresa una oracion:");
      
        if (oracion === null) {
          throw new Error("promp vacio.");
        }
      
        //Divido la oración en palabras usando el espacio como separador(.split emplea un separado,en este caso el " ")
        const palabras = oracion.split(" ");
      
        //Filtrar las palabras vacías en caso que el usuario meta muchos espacios (.trim elimina los espacio en blanco al inicio/final)
        const palabrasFilter = palabras.filter(palabra => palabra.trim() !== "");
      
        //cantidad de palabras
        const cantPalabras = palabrasFilter.length;
      
        console.log(`La oración tiene ${cantPalabras} palabra(s).`);
      } catch (error: any) {
        console.error(error.message);
      }    
}

export default contar;