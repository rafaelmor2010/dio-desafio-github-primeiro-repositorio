const tabuadas = [2,3,4,5,6,7,8,9,10,11];
const numeros = [1,2,3,4,5,6,7,8,9,10];
for (let i = 1; i <= tabuadas.length; i++) {
   for (let j = 0; j <= numeros.length; j++) {
    const tabuada = j * i;
    console.log(i + "x" + [j] + "=" + tabuada);
    
   }
    
}