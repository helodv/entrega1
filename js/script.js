// CoderHouse
// JavaScript 
// Alumno: Hernan Loureiro: 
// entrega 1: Simulador de plazo fijo

// FUNCIONES --------------------------------------------------


// login
function login() {
    // "base de datos"
    usuarioDb = 'pepe'
    passwordDb = '123'

    // prompt login
    for (let i = 3; i >= 0; i--) {
        let usuarioPrompt = prompt('Ingrese su usuario')
        let passwordPrompt = prompt('Ingrese su contraseña')
        if (usuarioPrompt == usuarioDb && passwordPrompt == passwordDb) {
            menuPlazoFijo(usuarioPrompt)
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

// bienvenida y prompt Plazo Fijo
function menuPlazoFijo(usuario) {
    let capitalPrompt = Number(prompt('Bienvenido ' + usuario + '.\nEste es un simulador de plazo fijo.\nIngrese el monto que desea invertir:'))
    let mesesPrompt = Number(prompt('Ingrese a cuantos meses desea crear el plazo fijo'))
    let interesMensual = 5
    calculadoraInteresCompuesto(capitalPrompt, mesesPrompt, interesMensual)

}

// calculadora de interes compuesto.
function calculadoraInteresCompuesto(capital, meses, interes) {
    let gananciaTotal = capital
    for (let i = 0; i < meses; i++) {
        gananciaTotal = (((interes * gananciaTotal) / 100) + gananciaTotal)
    }
    let gananciaNeta = gananciaTotal - capital
    alert('Si inviertes $' + capital + ' en un plazo de ' + meses + ' meses' + ' obtendras un total de $' + gananciaTotal.toFixed(2) + ' con una ganancia neta de $' + gananciaNeta.toFixed(2))

}

//---------------------------------------------------------------------------------

login()