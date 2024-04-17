import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { GifItem } from './GiftItem'

const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SS07RTrf44dYT9Y0UM2c60kjQ24ErcNu&q=${category}&limit=25&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
    })

    return gifs;
}

export const GiftGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const fetchGifs = async () => {
        const gifs = await getGifts(category);
        console.log(gifs);
        setImages(gifs);
    }

    useEffect(() => {
        fetchGifs();
    }, [category]);

    return (
        <div className="gif-grid">
            <h3>{category}</h3>
            {images.map(img => <GifItem key={img.id} {...img} />)}
        </div>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}