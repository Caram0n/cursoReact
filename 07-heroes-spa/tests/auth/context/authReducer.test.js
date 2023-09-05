import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Test en authReducer', () => {

    const initialState = {
        logged: false
    }

    test('debe retornar el estado por defecto', () => {
        const newState = authReducer(initialState, {})
        expect(newState).toBe(initialState)

    })

    test('login debe lalmar el login autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'David Díaz'
            }
        }

        const newState = authReducer(initialState, action)
        expect(newState).toEqual({
            logged: true,
            user: action.payload
        })
    })

    test('logout debe borrar el name del usuario y logged en false', () => {

        const actionLogin = {
            type: types.login,
            payload: 'David Díaz'
        }

        const actionLogout = {
            type: types.logout
        }
        const stateLogin = authReducer(initialState, actionLogin)
        const stateLogout = authReducer(stateLogin, actionLogout)

        expect(stateLogout).toEqual(
            { logged: false }
        )
    })
})