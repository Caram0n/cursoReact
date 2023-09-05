
import {fireEvent, render, screen} from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../src/auth'
import { Navbar } from '../../../src/ui'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <Navbar />', () => { 

    
    const contextValue ={
        logged: true,
        user: {
            name: 'David Díaz'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())
    
    test('debe mostrar el nombre del usuario ', () => { 
        

        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('David Díaz')).toBeTruthy()

        

     })

     test('debe llamar el logout y el navigate cuando se hace click en el botón', () => { 
        
        const contextValue ={
            logged: true,
            user: {
                id: 'ABC',
                name: 'David Díaz'
            }
        }
        

        render(
            <MemoryRouter >
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const logoutBtn = screen.getByRole('button')

        fireEvent.click(logoutBtn)

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})

      })
 })