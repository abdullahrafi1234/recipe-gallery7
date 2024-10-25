import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookBookmarks from "../CookBookmarks/CookBookmarks";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const [cookBookmarks, setCookBookmarks] = useState([]);
  
  const [currentlyCookBookmarks, setCurrentlyCookBookmarks] = useState([]);

  const [times, setTimes] = useState(0);

  const [calories, setCalories] = useState(0);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleAddToCookBookmarks = (recipe) => {
    const isExist = cookBookmarks.find(
      (item) => item.recipe_id == recipe.recipe_id
    );
    if (!isExist) {
      const newCookBookmarks = [...cookBookmarks, recipe];
      setCookBookmarks(newCookBookmarks);
      toast.success("Added Successful The Selected Recipe!");
    } else {
      toast.warn("Recipe Already Exists!");
    }
  };


  const handlePreparingButton = (cookBookmark) => {
    const remainingItem = cookBookmarks.filter(
      (item) => item.recipe_id !== cookBookmark.recipe_id
    );

    setCookBookmarks(remainingItem);
    const newCurrentlyCookBookmarks = [...currentlyCookBookmarks, cookBookmark];
    setCurrentlyCookBookmarks(newCurrentlyCookBookmarks);

    const newTimes = (parseInt(times) + parseInt(cookBookmark.preparing_time));
    setTimes(newTimes);

    const newCalories = (parseInt(calories) + parseInt(cookBookmark.calories));
    setCalories(newCalories);

    toast("Added Successful For Cooking List! ");
  };
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-[58%] items-center">
        {recipes.map((recipe, idx) => (
          <Recipe
            key={idx}
            recipe={recipe}
            handleAddToCookBookmarks={handleAddToCookBookmarks}
          ></Recipe>
        ))}
      </div>
      <div className="lg:flex-1">
        <div className="w-full border-2 rounded-2xl md:min-h-[850px] py-4 px-0.5">
          <CookBookmarks
            cookBookmarks={cookBookmarks}
            handlePreparingButton={handlePreparingButton}
            currentlyCookBookmarks={currentlyCookBookmarks}
          ></CookBookmarks>
          <div className="flex justify-end mt-12 gap-6 mr-5">
            <h2 className="text-base font-medium text-[#282828CC]">
              Total Time =
              <br />
              {times} minutes
            </h2>
            <h2 className="text-base font-medium text-[#282828CC]">
              Total Calories =
              <br /> {calories} calories
            </h2>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipes;
