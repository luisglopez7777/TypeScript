"use strict";
// Type object
// let user: object;
// let user = {}
var user = {
    id: 1,
    userName: 'luisglopez7777',
    isPro: true
};
console.log(user);
//Object vs object (Clase JS vs tipo de TS)
var myObject = {
    id: 1,
    userName: 'luisglopez7777',
    isPro: true
};
var isInstance = myObject instanceof Object;
console.log(isInstance);
console.log(user.id);
