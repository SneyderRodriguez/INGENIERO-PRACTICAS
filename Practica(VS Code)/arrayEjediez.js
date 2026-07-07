let ventas = [120000, 95000, 150000, 80000, 200000];
let suma = 0;
let promedio = 0;
let vmayor = ventas[0];
let vmenor = ventas[0];

console.log("=================================\n" + "\t REPORTE DE VENTAS SEMANAL" + "\n=================================");
for(let i = 0; i < ventas.length; i++){
    console.log("Día" +(i+1)+ ":" + ventas[i]);
    suma = suma + ventas[i];

    if(ventas[i] > vmayor){
        vmayor = ventas[i];
    }else if(ventas[i] < vmenor){
        vmenor = ventas[i];
    }
}
promedio = suma / ventas.length;
console.log("=================================")
console.log("Total: " + suma);
console.log("Promedio: " + promedio);
console.log("Venta mayor: " + vmayor);
console.log("Venta menor: " + vmenor);
console.log("=================================")