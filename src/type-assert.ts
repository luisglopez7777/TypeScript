// < > Angle bracket
export { }
let userName: any = 'Luis Gerardo'

//Tenemos una cadena, ts confia en mi
// let message: string = (<string>userName).length > 5 ?
//     `Hola ${userName}`
//     :
//     `Muy corto ${userName}`

// console.log(message)

let message: string = (userName as string).length > 5 ?
    `Hola ${userName}`
    :
    `Muy corto ${userName}`

console.log(message)