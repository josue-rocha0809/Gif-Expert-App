
import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

import './styles.css'

const GiftExpertApp = () => {

   const [category, setCategory] = useState(['Dragon ball']);

const onAddCategory = (newCategory) => {
  if(category.includes(newCategory)) return;  
setCategory ([...category,newCategory])
}

  return (
    <>
    <h1>GiftExpertApp</h1>

    <AddCategory 
    onAddCategory={(event) => {onAddCategory(event)}}
     />

   
    <ol>
       {category.map( (category) => (
         (
        <GifGrid 
        key={category} 
        category={category}
        />
        )
       ))
           }
    </ol>
    </>
  )
}

export default GiftExpertApp