
const personajes = ['Goku', 'Vegeta', 'Trunks']

const [p1] = personajes

console.log(p1)

const [, p2] = personajes

console.log(p2)

const [, , p3] = personajes

console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo()

console.log(letras)
console.log(numeros)

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre

const state = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }]
}

const [nombre, setNombre] = state('Goku')

console.log(nombre)
setNombre();
