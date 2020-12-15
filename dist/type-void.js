"use strict";
function showInfo(user) {
    console.log('user info', user.id, user.firstName);
    // return 'hola'
}
showInfo({ id: 1, firstName: 'De Gea' });
var unusable;
unusable = undefined;
function handleError(code, message) {
    //procesamiento del error
    throw new Error(message + ". Code: " + code);
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
