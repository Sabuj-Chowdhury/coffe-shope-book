import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ coffee }) => {
  const { name, image, popularity, id, rating, origin, type, category } =
    coffee || {};
  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name : {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity} </p>
        </div>
      </Link>
    </div>
  );
};
Cards.propTypes = {
  coffee: PropTypes.object,
};

export default Cards;
