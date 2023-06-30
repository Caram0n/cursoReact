import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"

describe('Prueba en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {

        const id = 1

        const hero = getHeroeById(id)

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    })


    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100

        const hero = getHeroeById(id)

        expect(hero).toBeFalsy()

    })

    test('getHeroeByOwner debe retornar un listado de 3 heroes DC', () => {

        const owner = 'DC'

        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(3)
        expect(heroes).toEqual(
            [{ id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }]
        )

    })

    test('getHeroeByOwner debe retornar un listado de 2 heroes Marvel', () => {

        const owner = 'Marvel'

        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(2)

    })




})