
import PropTypes from 'prop-types';

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

    getGifts(category)

    return (
        <>
            <h3>{category}</h3>
            <p>Hello World</p>
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}