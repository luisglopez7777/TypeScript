export { }
//[1, 'user']
let user: [number, string]
user = [1, 'Luis']

console.log(user[1])

//Tuplas con varios valore: id, username, bool
let userInfo: [number, string, boolean] = [2, 'Luis', true]
console.log(userInfo[2])

//Arreglo de tuplas
let array: [number, string][] = [];
array.push([1, 'Luis'])
array.push([2, 'Gerardo'])
array.push([3, 'Lopez'])

console.log(array)

let experiment: [string, string] = ['Luis', 'Lopez']
console.log(experiment)
