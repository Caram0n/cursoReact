import {  fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../CounterApp"

describe('Pruebas en <CounterApp />', () => { 
    const initialValue = 100
    
    test('debe hacer match con el snapshot', () => { 
        
        const {container} = render(<CounterApp value = {initialValue} />)
        expect(container).toMatchSnapshot()
     })


     test('debe mostrar el valor inicial de 100', () => { 
        
        render(<CounterApp value = {initialValue} />)
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
          initialValue
        )
      })


      test('debe incrementar con el botón +1', () => { 

        render(<CounterApp value = {initialValue} />)
        fireEvent.click(screen.getByText('+1'))

        expect(screen.getByText('101')).toBeTruthy()

       })

      test('debe incrementar con el botón -1', () => { 

        render(<CounterApp value = {initialValue} />)
        fireEvent.click(screen.getByText('-1'))

        expect(screen.getByText('99')).toBeTruthy()

       })

       test('debe funcionar el botón de reset', () => { 

        render(<CounterApp value = {initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // fireEvent.click(screen.getByText('Reset'))
        screen.getByRole('button', {name: 'btn-reset'})

        expect(screen.getByText(355)).toBeTruthy()



        })
 })