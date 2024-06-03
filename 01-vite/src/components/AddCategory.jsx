import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onAddCategory }) => {

    const [category, setCategory] = useState("");

    const handleInputChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={category}
                onChange={handleInputChange}
            />

            <button onClick={() => onAddCategory(category)}>Add</button>

            <button onClick={() => onAddCategory(category)}>Search</button>

        </div>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}