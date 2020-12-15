//Orientacion de fotografias
// const landscape = 0;
// const portrait = 2
// const square = 1
// const panorama = 1

enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Square = 4,
    Panorama = 5
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape
console.log('landscape', landscape)
console.log('landscape', PhotoOrientation[landscape])

const square: PhotoOrientation = PhotoOrientation.Square
console.log('square', PhotoOrientation[square])

enum PictureOrientation {
    Landscape = 10,
    Portrait,
    Square,
    Panorama
}
console.log(PictureOrientation.Portrait)

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex'
}
const country: Country = Country.Colombia
console.log(country)


enum DiasLaborales {
    Lunes = 'MON',
    Martes = 'TUE',
    Miercoles = 'WED',
    Jueves = 'THU',
    Viernes = 'FRI'
}

enum DiasFinSemana {
    Sabado = 'SAT',
    Domingo = 'SUN'
}

const Semana = {
    ...DiasLaborales,
    ...DiasFinSemana
}

console.log(Semana.Lunes); // MON
console.log(Semana.Sabado); // SAT