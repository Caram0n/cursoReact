import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'David',
        email: 'david@google.es'
    }

    test('debe regresar los valores por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm))
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })

    })

    test('debe cambiar el nombre del Formulario', () => {

        const newName = 'Juan'

        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange} = result.current

        act(() => {
            onInputChange({
                target: {name: 'name', value: newName}
            })
        })

        expect(result.current.name).toBe(newName)
        expect(result.current.formState.name).toBe(newName)
    })

    test('debe realizar el reset del Formulario', () => {

        const newName = 'Juan'

        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange, onResetForm} = result.current

        act(() => {
            onInputChange({
                target: {name: 'name', value: newName}
            })
            onResetForm()
        })

        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    })

})