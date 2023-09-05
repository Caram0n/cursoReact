import {render, screen} from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../src/router/AppRouter'

describe('Pruebas en <AppRouter />', () => { 
    
    
    test('debe mostrar el login si no está autenticado', () => { 

        const contextValue ={
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // screen.debug()

        expect(screen.getAllByText('Login').length).toBe(2)
        
     })


     test('debe mostrar el componente de Marvel si está autenticado', () => { 
        
        const contextValue ={
            logged: true,
            user: {
                id: 'ABC',
                name: 'David Díaz'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        //  screen.debug()

        expect(screen.getByText('David Díaz')).toBeTruthy()
      })
 })