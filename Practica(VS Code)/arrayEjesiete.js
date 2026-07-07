//CUANTAS PERSONAS SON MAYORES DE EDAD

let edades = [15, 18, 20, 12, 30, 16];
let contador = 0;

for(let i = 0; i < edades.length; i++){
    if(edades[i] >= 18){
        contador++
    }
}

console.log(contador + " son mayores de edad");