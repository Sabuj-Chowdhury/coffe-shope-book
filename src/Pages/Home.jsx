import Banner from "../Components/Banner";
import Heading from "../Components/Heading";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>

      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose Your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>

      {/* categories tab section */}

      {/* dynamic nested components */}
    </div>
  );
};

export default Home;
