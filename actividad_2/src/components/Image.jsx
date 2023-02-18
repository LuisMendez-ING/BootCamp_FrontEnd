import React, { useState } from "react";
import { SearchBox } from "./SearchBox";
import { ShowImage } from "./ShowImage";

const Image = () => {
    const [image, setImage] = useState('');

    const buscarImagen = (newImage) =>{
        setImage(newImage)
    }

    return (
        <div className="main">
            <h1>Buscador de <span style={{color: 'crimson' , textShadow: 'orange 1px 5px 3px', fontFamily: 'cursive'}}>GIFS</span></h1>
            <h5>Created by <span>Luis Mendez</span></h5>
            <div className="mainContent">
                <SearchBox onNewImage = {(e) => buscarImagen(e)}/>
                {
                    image && <ShowImage image = {image}/>
                }
            </div>

        </div>
    )
};

export default Image;
