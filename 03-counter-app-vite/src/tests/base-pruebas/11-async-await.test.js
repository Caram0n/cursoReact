import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => { 
    test('getImagen debe retornar un URL', async() => { 
        
        const url = await getImagen()
        console.log(url)

        expect(typeof url).toBe('string')
     })



    test('getImagen debe retornar un error si no tiene APIkey', async() => { 

        const resp = await getImagen()

        expect( resp).toBe('No se encontró la imágen')
     })
 })