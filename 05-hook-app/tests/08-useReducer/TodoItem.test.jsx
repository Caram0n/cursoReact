
import {fireEvent, render, screen} from '@testing-library/react'
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Pruebas en <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn()
    const ontoggleTodoMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())
    
    test('debe mostrar el Todo Pendiente de completar', () => { 
        
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={ontoggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
     })


    test('debe mostrar el Todo completado', () => { 

        todo.done = true
        
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={ontoggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
     })


     test('span debe llamar el ToggleTodo cuando se hace click ', () => { 
        
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={ontoggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(ontoggleTodoMock).toHaveBeenCalledWith(todo.id)

      })


     test('button debe llamar el deleteTodo ', () => { 
        
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={ontoggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)

      })
 })