import {fireEvent, render, screen} from '@testing-library/react'
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 

    test('debe cambiar el valor del input', () => { 
        
        render( <AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, {target: {value: 'Saitama'}})

        expect(input.value).toBe('Saitama')

     })

     test('debe llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')


        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)


        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)

      })

      test('no debe llamar el onNewCategory si el input está vacío', () => { 

        
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)
        
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')


        fireEvent.input(input, {target: {value: ' '}})
        fireEvent.submit(form)


        expect(onNewCategory).not.toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(0)
       })
 })

 
 