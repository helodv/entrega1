// 1° Preentrega: CoderHouse: JavaScript

// FUNCIONES --------------------------------------------------


// FUNCION login
function login() {
    // "base de datos"
    usuarioDb = 'pepe'
    passwordDb = '123'

    // login
    for (let i = 3; i >= 0; i--) {
        let usuarioPrompt = prompt('Ingrese su usuario')
        let passwordPrompt = prompt('Ingrese su contraseña')
        if (usuarioPrompt == usuarioDb && passwordPrompt == passwordDb) {
            menuInversion(usuarioPrompt)
            break
        } else if (usuarioPrompt !== usuarioDb || passwordPrompt !== usuarioDb) {
            if (i < 1) {
                alert('Ha ingresado sus datos incorrectamente demasiadas veces\n por favor intente nuevamente mas tarde')
                break
            }
            alert('Usuario o clave incorrecta.\nLe quedan ' + i + ' intentos')
        }
    }
}

// FUNCION calculadora de inversion
function menuInversion(usuario) {
    alert('Bienvenido ' + usuario)
}

//------------------------------------------------------------

alert('Bienvenido a CoderPrestamo\nPara poder utilizar el simulador debera loguear')
login()