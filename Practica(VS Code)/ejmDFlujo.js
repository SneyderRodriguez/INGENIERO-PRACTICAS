const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ingresa un número: ", (respuesta) => {
    const numero = Number (respuesta);
    if (numero===5){
        console.log("Los numeros son iguales")
        rl.close();
    }
    else {
        console.log("Los números no son iguales")
    }
    rl.close();
})