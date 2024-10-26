// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    // Tu código aquí...
    const resultado = 10 >= 9;
    console.log("El numero mayor es " + resultado);
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    // Tu código aquí...
    const resultado = 0 === 0;
    console.log(resultado);
}

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    // Tu código aquí...
    const resultado1 = 7 > 8; 
    const resultado2 = 7 < 10;
    console.log(resultado1 && resultado2);
}

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    // Tu código aquí...
    const producto = 1500;
    const descuento = 0.25;
    const disponible = 1150;

    const aplicarDesc = (producto * descuento)/100;
    const precioFinal = aplicarDesc - disponible;

    const seCompra = disponible >= precioFinal;
    console.log(seCompra);

}

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    // Tu código aquí...
    function compareMessageVariable(){ 
        const mensaje = "Hola JavaScript" ; 
        console.log(mensaje); 
}
}
// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    // Tu código aquí...
    const IS_DISABLED = true; 
    console.log(IS_DISABLED);

}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    // Tu código aquí...
    const IS_DISABLED = true; 
    console.log(IS_DISABLED);
}

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    // Tu código aquí...
    let capacidad = null; 
    console.log(capacidad);
}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    // Tu código aquí...
    let dinero = undefined;
    //Imprime la variable
    console.log(dinero);
}

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    // Tu código aquí...
    let userName = "Clara";
    const tipoDeDatoEs = typeof userName;
    //Imprime el tipo de dato
    console.Log(tipoDeDatoEs);
}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    // Tu código aquí...
    let dogId = 123;
    //Verifica si el tipo de dato es es String
    if (typeof dogId === 'string'){
     console.log("dogId es una cadena de texto:" + typeof dogId);
    }else{
     //Al ejecutar imprime este ya que no es una cadena de texto
     console.log("dogId no es una cadena.El tipo de dato es:"+ typeof dogId);
    }
}

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    // Tu código aquí...
    console.log("Hello Desarrollo Joven");
}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    // Tu código aquí...
    let edad = 30; 
    console.log(edad);
}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    // Tu código aquí...
    let version = 2024; // asigna el valor 2024 a la variable
    console.log("La version de JavaScript es: " + version);
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};
