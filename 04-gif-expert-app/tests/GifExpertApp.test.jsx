import {fireEvent, render, screen} from '@testing-library/react'
import {GifExpertApp} from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => { 
    
    test('debería añadir nueva categoría', () => { 

        const newCategory = 'Saitama'

        const container = render(<GifExpertApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target:{value: newCategory}})
        fireEvent.submit(form)

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2)
        
     })

    test('no debe añadir nueva categoría si ya existe', () => { 

        const newCategory = 'Saitama'

        const container = render(<GifExpertApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target:{value: newCategory}})
        fireEvent.submit(form)
        
        fireEvent.input(input, {target:{value: newCategory}})
        fireEvent.submit(form)

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2)
        
     })

 })