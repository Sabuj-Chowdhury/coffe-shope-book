import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  const handleSort = (sortBy) => {
    if (sortBy == "popularity") {
      // popularity sorting
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy == "rating") {
      // rating sort
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffees &apos;s by Popularity and Rating &gt;
          </h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning"
          >
            Sort by Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning"
          >
            Sort by Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Cards key={coffee.id} coffee={coffee}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
