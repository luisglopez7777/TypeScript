
function showInfo(user: any): any {
    console.log('user info', user.id, user.firstName)
    // return 'hola'
}

showInfo({ id: 1, firstName: 'De Gea' })

let unusable: void
unusable = undefined

function handleError(code: number, message: string): never {
    //procesamiento del error
    throw new Error(`${message}. Code: ${code}`)
}

function sumNumbers(limit: number): never {
    let sum = 0;
    while (true) {
        sum++
    }
}