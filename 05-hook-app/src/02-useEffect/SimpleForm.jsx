import React, { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message'

export const Simpleform = () => {

    const [formState, setFormState] = useState({
        username: 'David',
        email: 'david@google.com'
    })
    const {username, email} = formState
    
    const onInputChange = ({target}) => {
        const {name, value} = target

        setFormState({
            ...formState, 
            [ name]: value
        })
    }

    useEffect(() => {
    //   console.log('useEfect called')    
    },[])

    useEffect(() => {
    //   console.log('formstate changed')    
    },[formState])

    useEffect(() => {
    //   console.log('email changed')    
    },[email])

    


  return (
    <>
    <h1>Formulario Simple</h1>
    <hr />

    <input 
        type="text" 
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
    />
    <input 
        type="email" 
        className='form-control mt-2'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onInputChange}
    />


    {
       ( username === 'David2') && <Message />
    }
    </>
  )
}
