
// const saludar = function(nombre){
//     return`Hola, ${nombre}`
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`

const saludar4 = () => `Hola mundo`

console.log(saludar2('David'));
console.log(saludar3('David'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'whatever123'
});

console.log(getUser())


// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

const getUsuarioActivo = (nombre) => 
    ({
        uid: 'ABC123',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('David')
console.log(usuarioActivo)