//ENCONTRAR UN NÚMERO

let num = [8, 15, 4, 20, 9, 7];
let encontrado = false;

for(let i = 0; i < num.length; i++){
    if(num[i] == 20){
        encontrado = true;
    }
}
if(encontrado){
    console.log("Número encontrado");
}else{
    console.log("Número no encontrado");
}
