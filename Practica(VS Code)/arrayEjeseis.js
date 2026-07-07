//NÚMERO MENOR

let num = [8, 3, 15, 20, 7];
let menor = num[0];

for(let i = 0; i < num.length; i++){
    if(num[i] < menor){
        menor = num[i];
    }
}
console.log("El número menor es:  " + menor);