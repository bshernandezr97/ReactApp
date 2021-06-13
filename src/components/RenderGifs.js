import React, { useEffect, useState } from 'react'
import { GifService } from '../helpers/GifHelper';

export const RenderGifs = ({category}) => {

    const [images, setImages] = useState([]);


    useEffect(() => {
       GifService(category).then(res => setImages(res))
    }, [category]);

    const RenderImages = () => {
        const divGifs = images?.map(i => {
            return (<img key={i.id} src={i.url} alt={i.title} />)
        })
        return (
            <div className="gif_div">
                {divGifs}
            </div>
        );
    }
    

    console.log(images);
    return (
        <div>
            <h3>{category}</h3>
            {RenderImages()}
        </div>
    )
}
