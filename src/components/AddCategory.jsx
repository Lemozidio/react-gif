import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('')
  
  const onInputChange = ({target}) => {
    // console.log( target.value)
    setInputValue( target.value )
  }
  
  const onSubmit = ( e ) => {
    e.preventDefault()
    // console.log(inputValue)
    
    if( inputValue.trim().length <= 1  ) return;
    // setCategories( (c) => [ inputValue, ...c ])
    onNewCategory( inputValue.trim()) 
    setInputValue('')
  }

  return (

    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="BUSCAR"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>

  )
}
