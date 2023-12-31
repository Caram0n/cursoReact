import React, { useState } from 'react'
import {AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        // TODO: Validar mayúsculas y minúsculas para que no se añadan items iguales a la lista

        if(categories.includes(newCategory)) return

        setCategories([ newCategory, ...categories])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

       
        <AddCategory 
        // setCategories = {setCategories}
        onNewCategory ={onAddCategory}
        />

      
        {
        categories.map( (category) => (
            <GifGrid key={category} category={category} />
        ))
        }
       
    </>
  )
}
