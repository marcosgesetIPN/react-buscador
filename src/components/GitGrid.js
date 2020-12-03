import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFechGifs } from '../hooks/useFechGifs';
import { GifGridItem } from './GifGridItem';

/*
export const GitGrid = ({category}) => {

    const [images, setImages] = useState([]);

    //se ejecuta el codigo una sola vez cuando el componente es renderizado la primera vez
    useEffect(() =>{
        getGifs(category)
            .then(imgs=>{
                setImages(imgs);
            })
    }, [category]) //se manda la categoria porque si llegase a cambiar la tiene que mandar para que se modifique

    /*
    SE MUEVE ESTO AL getGifs
    //peticion http
    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=8&api_key=v8CJQqmIDMeyuutg19l6K2xxU1VR3d0E`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
                //con el ? preguntamos si vienen las imagenes
            }

        });

        console.log(gifs);

        setImages(gifs);
    } */

    //getGifs();
    /*
    con el nuevo componente de GitGridItem vamos a quitar esto
    y se remplaza por lo de a bajo
    return (
        <>
           <h3>{category}</h3> 

           <ol>
                 {
                    images.map(img=>{
                        return (
                            <li key={img.id}>
                                {img.title}
                            </li>
                        )
                    })
                        
                }
           </ol>
        </>
    ) 
    ---------

    return (
        <>
            <h2>{category}</h2>
            <div className = "card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key = {img.id}
                            {...img}
                        />
                    ))     
                }
            </div>
        </>
    )
} */

//nueva forma

export const GitGrid = ({category}) => {

    const {data, loading} = useFechGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {loading && <p>Loading</p>}
            <div className = "card-grid">
                {
                    data.map(img => (
                        <GifGridItem
                            key = {img.id}
                            {...img}
                        />
                    ))     
                }
            </div>
        </>
    )
}

export default GitGrid;