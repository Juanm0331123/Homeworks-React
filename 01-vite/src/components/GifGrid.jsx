import PropTypes from "prop-types";

import { useState, useEffect, useCallback } from "react";


const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=9T9vYpAHP9zjKLglGIBudT4bmosyAXcR&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => {

    return {
      id: img.id,
      title: img.title,
      url: img.images.fixed_height.url
    }
  })
  
  return gifs;
}


export const GifGrid = ({ category }) => {

  getGifs(category)

  return (
    <>
    <h3>{category}</h3>
    <p>Hello World</p>
    </>
  )
}

// export const GifGrid = ({ category }) => {

//   getGifs(category)

//   return (
//     <>
//     <h3>{category}</h3>
//     <p>Hello World</p>
//     </>
//   )
// }

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = useCallback(async () => {
    const gifs = await getGifs(category);
    console.log(gifs);
    setGifs(gifs);
  }, [category]);

  useEffect(() => {
    fetchGifs();
  }, [fetchGifs]);

  return (
    <div className="gif-grid">
      {gifs.map((gif) => (
        <GifItem key={gif.id} gif={gif} />
      ))}
    </div>
  );
};



GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};