import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const Cards = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();
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
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute -top-5 -right-5 p-3 bg-warning cursor-pointer rounded-full"
        >
          <FaRegTrashAlt size={20} />
        </div>
      )}
    </div>
  );
};
Cards.propTypes = {
  coffee: PropTypes.object,
  handleRemove: PropTypes.func,
};

export default Cards;
