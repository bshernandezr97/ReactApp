
import React, { useState } from 'react'
import PropTypes from 'prop-types';

function AddCategory( {setCategories} ) {

    const [text, setText] = useState('');

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(c => [text, ...c]);
    }
     
    return (
         <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={handleOnChange}
                type="text"
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
