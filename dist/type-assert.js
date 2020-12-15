"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userName = 'Luis Gerardo';
//Tenemos una cadena, ts confia en mi
// let message: string = (<string>userName).length > 5 ?
//     `Hola ${userName}`
//     :
//     `Muy corto ${userName}`
// console.log(message)
var message = userName.length > 5 ?
    "Hola " + userName
    :
        "Muy corto " + userName;
console.log(message);
