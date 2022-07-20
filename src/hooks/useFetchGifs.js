import React,{useState,useEffect} from 'react';
import { getGifts } from '../helpers/GetGifts'

export const useFetchGifs = (category) => {

    const [ images , setImages ] = useState([]);
    const [ isLoading , setLoading ] = useState(true);

    const getImages = async() => {
     const imagenes = await getGifts(category);
     setImages(imagenes);
     setLoading(false)
    }
  
  useEffect(() => {
   getImages()
  },[])
  
  return {
    images,
    isLoading
  }


}
