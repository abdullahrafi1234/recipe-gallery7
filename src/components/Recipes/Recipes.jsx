import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookBookmarks from "../CookBookmarks/CookBookmarks";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const [cookBookmarks, setCookBookmarks] = useState([]);

  const handleAddToCookBookmarks = (recipe) => {
    const isExist = cookBookmarks.find(
      (item) => item.recipe_id == recipe.recipe_id
    );
    if (!isExist) {
      const newCookBookmarks = [...cookBookmarks, recipe];
      setCookBookmarks(newCookBookmarks);
    } else {
      alert("nasim");
    }
  };
  const [currentlyCookBookmarks, setCurrentlyCookBookmars] = useState([]);
  const handlePreparingButton = (cookBookmark) => {
    const remainingItem = cookBookmarks.filter(
      (item) => item.recipe_id !== cookBookmark.recipe_id
    );
    setCookBookmarks(remainingItem);
    const    newCurrentlyCookBookmarks = [...currentlyCookBookmarks, cookBookmark];
    setCurrentlyCookBookmars(newCurrentlyCookBookmarks);

  };
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-[60%] items-center">
        {recipes.map((recipe, idx) => (
          <Recipe
            key={idx}
            recipe={recipe}
            handleAddToCookBookmarks={handleAddToCookBookmarks}
          ></Recipe>
        ))}
      </div>
      <div className="md:w-[40%]">
        <CookBookmarks
          cookBookmarks={cookBookmarks}
          handlePreparingButton={handlePreparingButton}
          currentlyCookBookmarks = {currentlyCookBookmarks}
        ></CookBookmarks>
      </div>
    </div>
  );
};

export default Recipes;
