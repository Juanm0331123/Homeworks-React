import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({ id, title, url }) => {
    return (
        <div className="gif-item" key={id}>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}