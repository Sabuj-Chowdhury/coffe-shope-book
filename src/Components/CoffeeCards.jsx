import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const filterdByCategory = [...data].filter(
        (coffees) => coffees.category === category
      );
      setCoffees(filterdByCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [category, data]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Cards key={coffee.id} coffee={coffee}></Cards>
        ))}
      </div>
      <button onClick={() => navigate("/coffees")} className="btn btn-warning">
        View All
      </button>
    </div>
  );
};

export default CoffeeCards;
