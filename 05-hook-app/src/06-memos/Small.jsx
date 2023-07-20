import { memo } from "react"

memo
export const Small = memo(({value}) => {

console.log('Me volví a dibujar')

  return (
    <small> {value} </small>
  )
})
