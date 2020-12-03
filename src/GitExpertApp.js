import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import GitGrid from './components/GitGrid';

export const GitExpertApp = () =>{
    //const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['Nike']);

    /*
    const handleAdd = () =>{
        //extrae las categorias anteriores y agrega esta
        setCategories([...categories, 'malcom']); 
        
        /* con un callback se puede hacer
        setCategories(cats => [...cats, 'HunterX']);
        
    } */

    //AddCategory le estamos mandado una propiedad y le mando la referencia
    //{setcategories} es lareferencia 
    return(
        <>
            <h2>GitExpertApp</h2>
            <AddCategory  setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => {
                        /* return <li key = {category}> {category} </li> */
                        return <GitGrid 
                                key = {category}
                                category = {category}
                            />
                    })
                }
            </ol>
        </>
    )
}

export default GitExpertApp; 