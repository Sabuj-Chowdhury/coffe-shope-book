import { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import { getAllFavorite, removeFavorites } from "../Util";
import Cards from "../Components/Cards";

const DashBoard = () => {
  // const { pathname } = useLocation();
  // console.log(location);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorites = getAllFavorite();
    setCoffees(favorites);
  }, []);

  const handleRemove = (id) => {
    removeFavorites(id);
    const favorites = getAllFavorite();
    setCoffees(favorites);
  };

  return (
    <div>
      <Heading
        title={"Welcome to Dashboard"}
        subtitle={
          "Manage Coffees that you have previously added as favorites. You Can add or remove them from here."
        }
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Cards
            handleRemove={handleRemove}
            key={coffee.id}
            coffee={coffee}
          ></Cards>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
