import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // resolve()
//         const heroe = getHeroeById(2)
//         resolve(heroe)
//         // reject('No se pudo encontrar el héroe')
//     }, 2000)
// });


// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // resolve()
            const heroe = getHeroeById(id)
            //resolve(heroe)
            // reject('No se pudo encontrar el héroe')
            heroe ? resolve(heroe) : reject('No se pudo enconrar el héroe')
        }, 2000)
    });

}

getHeroeByIdAsync(2)
    // .then(heroe => console.log('Heroe', heroe))
    // .catch(err => console.warn(err))
    .then(console.log)
    .catch(console.warn)

