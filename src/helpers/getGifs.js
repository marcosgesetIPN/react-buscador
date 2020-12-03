   //peticion http
export const getGifs = async(category) => {
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

    return gifs;
}

//esta funcion resuelve una promesa la cual regresa la coleccion de las imagenes