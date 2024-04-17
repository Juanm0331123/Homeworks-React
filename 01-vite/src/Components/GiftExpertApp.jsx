import { useState } from 'react';
import './FirstApp.css'

const list = ['Manzana']

export function GiftExpertApp() {
    const [categories, setCategories] = useState(list);
    const [category, setCategory] = useState('');

    const onAddCategory = () => {
        setCategories(list => [...list, category]);
        setCategory('');
    }

    const onSetCategory = (e) => {
        setCategory(e.target.value);
    }

    return (
        <>
            <h1> GiftGrid </h1>
            <input
                type="text"
                value={category}
                onChange={onSetCategory}
            />
            <button onClick={onAddCategory}>Add Category</button>
            <ol>
                {categories.map(
                    (category, key) => {
                        return <li key={key}> {category} </li>
                    }
                )
                }
            </ol>
        </>
    )
}