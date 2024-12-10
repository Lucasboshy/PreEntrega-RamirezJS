
function pedirMonto() {
    let monto = parseFloat(prompt("Ingrese el monto a financiar (Minimo de $1000)")); //Monto a financiar minimo de 1000
    while (isNaN(monto) || monto <= 999) {
        monto = parseFloat(prompt("El monto debe ser un número valido o mayor a $1000"));
    }
    return monto;
}
function pedirCuotas () {
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (Maximo de 12)")); //Cantidad de cuotas
    while (isNaN(cuotas) || cuotas > 12 || cuotas <= 0) {
        cuotas = parseInt(prompt("La cantidad de cuotas debe ser un número valido o mayor a 0"));
    }
    return cuotas;
}

function calcularCuota() {
    let monto = pedirMonto();
    let cuotas = pedirCuotas();
    alert("El monto a pagar por cuota es de " + (monto/cuotas).toFixed(2));
    if (confirm("Desea usar la calculadora nuevamente?")) { // Le pregunta si quiere volver a usar la calculadora
        calcularCuota();
}
else { // Si no quiere volver a usar la calculadora, le muestra un mensaje
    alert("Gracias por usar la calculadora");
}
console.log("El monto a financiar del usuario por cuota es de " + (monto/cuotas).toFixed(2) + " y la cantidad de cuotas es de " + cuotas);
}
calcularCuota()

//Alumno: Lucas Thomas Ramirez
//Comision:63340
//Me gustaria haber hecho unos cambios como por ejemplo que si el usuario pone por ejemplo 1.1
//lo tome como invalido y tenga que poner un numero entero
//Tambien que un error que no pude corregir es que si el usuario pone 999.99999999999 lo sigue tomando como valido y lo redondea como mil
//Pero son cosas que me gustaria haber hecho