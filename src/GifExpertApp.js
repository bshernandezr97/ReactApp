import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { RenderGifs } from './components/RenderGifs';

function GifExpertApp() {

    const [categories, setCategories] = useState(['Dragon Ball', 'Naruto', 'KNY']);

    const RenderCategories = () => {
        const cat = categories.map(cat => {
            return <RenderGifs key={cat} category={cat}  />
        });
        return cat;
    }



    console.log(RenderCategories());
    return (
        <>
          <h2>Gif Expert App</h2>
          <hr />  
          <AddCategory setCategories={setCategories}/>
          <ol>
              {RenderCategories()}
          </ol>
        </>
    )
}

export default GifExpertApp
