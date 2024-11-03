import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards";

const Coffees = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {data.map((coffee) => (
        <Cards key={coffee.id} coffee={coffee}></Cards>
      ))}
    </div>
  );
};

export default Coffees;
