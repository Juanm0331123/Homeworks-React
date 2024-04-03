import './ComponentApp.css'
import { useState } from 'react';

const initialsCategories = ['First category', 'Second category', 'Third category'];

export const ComponentApp = () => {
    const [categories, setCategories] = useState(initialsCategories);
    const [category, setCategory] = useState('');

    const handleInputChange = (event) => {
        setCategory(event.target.value);
    }

    const handleAddCategory = () => {
        setCategories([...categories, category]);
        setCategory('');
    }

    return (
        <>
            <h1>GifExpert</h1>
            <ol>
                {
                    categories.map(
                        (category, key) => {
                            return <li key={key}>
                                {category}
                            </li>
                        }
                    )
                }
            </ol>

            <input type="text" value={category} onChange={handleInputChange} />
            <button onClick={handleAddCategory}>Add category</button>
        </>
    )
}