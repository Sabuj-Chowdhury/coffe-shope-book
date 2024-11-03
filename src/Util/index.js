import toast from "react-hot-toast";

// get coffees from local storage
const getAllFavorite = () => {
  const all = localStorage.getItem("favorites");

  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    return [];
  }
};

// add coffee to local storage
const addFavorite = (coffee) => {
  //   console.log(coffee);
  const favorites = getAllFavorite();
  const isExist = favorites.find((item) => item.id == coffee.id);
  if (isExist) return toast.error("Coffee already exist!");
  //   console.log(favorites);
  favorites.push(coffee);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Successfully added to favorites.");
};

// remove coffee from local storage

export { addFavorite, getAllFavorite };
