import React, {useState} from 'react'
import '../styles.css'

export const AddCategory = ({onAddCategory}) => {

  const [inputValue,setInputValue] = useState("")


  const onInputChange = (event) => { 
    setInputValue(event.target.value);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    const categoryInputValue = inputValue.trim();
    
    if(categoryInputValue.length <= 1) return;

    onAddCategory(categoryInputValue)
    setInputValue("")
  
  }

  return (
    <form onSubmit={onSubmit}>
        <input
        placeholder={"Agregar Categoria"}
        value={inputValue}
        onChange={ onInputChange}
        />


    </form>
  )
}

