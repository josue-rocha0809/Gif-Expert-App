import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from './GifItem';


const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category)

  return (
    <>

    {isLoading && (<h2>Cargando...</h2>)}

    <h2>{category}</h2>
    
    <div className={'card-grid'}>
      {images.map( ( image ) => (
       <GifItem
       key={image.id}
       {...image}
       />
      ))
      }
    </div>
    
    </>
  )
}

export default GifGrid