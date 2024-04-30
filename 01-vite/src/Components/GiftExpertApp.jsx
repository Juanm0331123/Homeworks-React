import './ComponentApp.css'
import { useState } from 'react';
import { AddCategory } from './AddCategory'
import { GiftGrid } from './GiftGrid';

const initialsCategories = [''];

export const ComponentApp = () => {
    const [categories, setCategories] = useState(initialsCategories);

    const handleAddCategory = (category) => {
        setCategories([...categories, category]);
    }

    return (
        <>
            <h1>GifExpert</h1>
            <AddCategory handleAddCategory={handleAddCategory} />
            <ol>
                {
                    categories.map(
                        (category, key) => {
                            return <GiftGrid key={key} category={category} />
                        }
                    )
                }
            </ol>
        </>
    )
}