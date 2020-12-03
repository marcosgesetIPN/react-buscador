import React, {useState} from 'react';
import PropTypes from 'prop-types'; 

export const AddCategory = ({setCategories}) => {
    //se lo que la persona escribe
    const [inputValue, setInputValue] = useState(''); //sino se pone nada es undefined

    const handleInputChange = (e) => { //elemento
        //console.log(e.target.value); //obteniendo el valor
        setInputValue(e.target.value); //guarda lo que uno escribe
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //evitar que haga un refresh al darle enter

        if (inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue, ...cats]);
            setInputValue('');
        }     
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value = {inputValue}
                onChange= {handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
