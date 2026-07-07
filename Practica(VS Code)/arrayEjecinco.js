//NÚMERO MAYOR

let num = [8, 3, 15, 20, 7];
let mayor = num[0];

for(let i = 0; i < num.length; i++){
    if(num[i] > mayor){
        mayor = num[i];
    }
}
console.log("El número mayor es:  " + mayor);