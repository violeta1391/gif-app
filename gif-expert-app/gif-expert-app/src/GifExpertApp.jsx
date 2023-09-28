import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import './styles.css';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['dinos']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <div>
                <h1> Buscador de Gifs 🐟 🐠 </h1>
            </div>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}