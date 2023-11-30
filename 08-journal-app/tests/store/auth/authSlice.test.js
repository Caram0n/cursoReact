import { authSlice, checkinCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures"

describe('Pruebas en authSlice', () => { 
    
    test('debe regresar el estado inicial y llamarse "auth"', () => { 
        
        expect(authSlice.name).toBe('auth')

        const state = authSlice.reducer(initialState, {})

        expect(state).toBe(initialState)
     })


     test('debe realizar la autorización', () => { 
        const state = authSlice.reducer(initialState, login(demoUser))

        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        })
      })

      test('debe realizar el logout sin argumentos', () => { 
        const state = authSlice.reducer(authenticatedState, logout())

        expect(state).toEqual({
            status: 'not-authenticated', //'not-authenticated' 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        })
       })


      test('debe realizar el logout y mostrar un mensaje de error', () => { 

        const errorMessage = 'Credenciales no son correctas'
        const state = authSlice.reducer(authenticatedState, logout({errorMessage}))

        expect(state).toEqual({
            status: 'not-authenticated', //'not-authenticated' 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        })
       })

       test('debe cambiar el estado a checking', () => { 
        
            const state = authSlice.reducer(authenticatedState, checkinCredentials())
            expect(state.status).toBe('checking')
        })
 })