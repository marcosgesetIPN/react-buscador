import React from 'react'

export const GifGridItem = ({title, url}) => {

    console.log({title, url});

    return (
        <div className = "card animate__animated animate__zoomIn">
            <img src={url} alt={title} className="tamanio"/>
            <p>{title}</p>
        </div>
    )
}
