import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {

    test('getHeroesByIdAsync debe retornar un héroe', (done) => {
        const id = 1

        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual(
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }
            )
            done()
        })
    })

    test('getHeroesByIdAsync debe devolver un error si héroe no existe', (done) => {
        const id = 100

        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBeFalsy()
        })
        .catch( error => {
            expect(error).toBe('No se pudo encontrar el héroe')
            done()
        })
    })

    
})