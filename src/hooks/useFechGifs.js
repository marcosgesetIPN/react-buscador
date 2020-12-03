import { useEffect } from 'react';
import {useState} from 'react'
import { getGifs } from '../helpers/getGifs';

/* ejemplo
export const useFechGifs =() =>{
    const [state, setstate] = useState({
        //su estado inicial es este objeto que le pasamos
        data: [],
        loading: true
    });


    setTimeout(() => {
        setstate({
            data: [1, 2, 3, 4],
            loading: false
        })
    }, 2500);

    return state; //es la data y el loading
} */

export const useFechGifs =(category) =>{
    const [state, setstate] = useState({
        //su estado inicial es este objeto que le pasamos
        data: [],
        loading: true
    });

    //los efectos no pueden ser sincronos
    useEffect(() => {
        getGifs(category)
            .then(img=>{ //esto es una promesa
                setstate({
                    data: img,
                    loading: false
                }); 
            })
    }, [category]) //se dispara cuando la categoria cambie

    

    return state; //es la data y el loading
}

