import PropTypes from "prop-types";

const GifItem = ({ gif }) => {
  return (
    <div>
      <img src={gif.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  );
};

GifItem.propTypes = {
  gif: PropTypes.object.isRequired,
};
 
export default GifItem;