"use strict";
function createPicture(title, date, size) {
    //se crea la fotografía
    console.log('picture created', title, date, size);
}
createPicture('Cumpleaños', '4/20', '1000x1000');
//Parametros opcionales
function createPicture2(title, date, size) {
    //se crea la fotografía
    console.log('picture created', title, date, size);
}
//Tipo de retorno con TS
function handleError(code, message) {
    //Procesamiento del codigo
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has ocurred';
    }
}
var result = handleError(500, 'error');
console.log(result);
