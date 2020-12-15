export { }
// 10, '10'
// let idUser: number | string
// idUser = 10
// idUser = '10'

//Alias de tipos
type IdUser = number | string
let idUser: IdUser
idUser = 10
idUser = '10'

//Tipos literales
type PhotoSize = '100x100' | '500x500' | '1000x1000'
let smallPicture: PhotoSize = '100x100'