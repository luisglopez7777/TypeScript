//Crear una fotografia
type SquareSize = '100x100' | '500x500' | '1000x1000'

function createPicture(title?: string, date?: string, size?: SquareSize) {
    //se crea la fotografía
    console.log('picture created', title, date, size)
}

createPicture('Cumpleaños', '4/20', '1000x1000')

//Parametros opcionales
function createPicture2(title: string, date: string, size: SquareSize) {
    //se crea la fotografía
    console.log('picture created', title, date, size)
}

//Tipo de retorno con TS
function handleError(code: number, message: string): never | string {
    //Procesamiento del codigo
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`)
    } else {
        return 'An error has ocurred'
    }
}

let result = handleError(500, 'error')
console.log(result)