import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('should first', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(testUser)
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'David'        

        const user = getUsuarioActivo(nombre)
        expect(user).toStrictEqual({
            uid:'ABC567',
            username: nombre   
        })
    })
});