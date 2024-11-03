import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from "../assets/nutrition.png";
import { addFavorite, getAllFavorite } from "../Util";

const CoffeeDetails = () => {
  const { id } = useParams();
  const allCoffeeData = useLoaderData();
  const [coffee, setCoffee] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const singleData = allCoffeeData.find((coffee) => coffee.id == id);
    setCoffee(singleData);
    const favorites = getAllFavorite();
    const isExist = favorites.find((item) => item.id == singleData.id);
    if (isExist) {
      setIsFavorite(true);
    }
  }, [allCoffeeData, id]);

  const {
    name,
    image,
    ingredients,
    nutrition_info,
    description,
    making_process,
    rating,
    popularity,
  } = coffee;

  const handleFavorite = (coffee) => {
    addFavorite(coffee);
    setIsFavorite(true);
  };

  return (
    <div className="my-12">
      {/* description */}
      <h1 className="text-2xl md:text-4xl font-thin mb-6">{description}</h1>

      {/* image */}
      <div className="w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl">
        <img src={image} className="h-full w-full" alt="" />
      </div>

      {/* title and favorite button */}
      <div className="flex justify-between items-center my-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-thin">{name}</h1>
          <p className="text-base">Popularity: {popularity}</p>
          <p className="text-base">Rating: {rating}</p>
        </div>
        <div>
          <button
            disabled={isFavorite}
            onClick={() => handleFavorite(coffee)}
            className="btn btn-warning"
          >
            Add Favorite
          </button>
        </div>
      </div>

      {/* Making Process */}
      <div className="my-6">
        <h2 className="text-2xl font-thin">Making Process:</h2>
        <p className="text-base">{making_process}</p>
      </div>

      {/* Ingredients & Nutrition info */}
      <div className="my-6 flex justify-between items-center">
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-2xl font-thin">Ingredients:</h1>
            <ul className="text-xl ml-12">
              {ingredients &&
                ingredients.map((i, idx) => (
                  <li className="list-disc" key={idx}>
                    {i}
                  </li>
                ))}
            </ul>
            <h1 className="text-2xl font-thin">Nutrition:</h1>
            {nutrition_info &&
              Object.entries(nutrition_info).map(([key, value], idx) => (
                <li className="list-disc" key={idx}>
                  {key}: {value}
                </li>
              ))}
          </div>
        </div>

        {/*  */}
        <div className="flex-1">
          <img src={nutritionImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default CoffeeDetails;
