let num = [5,8,10,7,3,2];
let suma = 0;

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 === 0){
        suma += num[i];
    }
}
console.log("La suma de los pares es: " + suma);