import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ handleAddCategory }) => {

    const [category, setCategory] = useState('');

    const handleInputChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <div>
            <input type="text" value={category} onChange={handleInputChange} />
            <button onClick={() => handleAddCategory(category)}>Add category</button>
        </div>
    );
}

AddCategory.propTypes = {
    handleAddCategory: PropTypes.func.isRequired
}