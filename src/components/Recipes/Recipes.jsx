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
    const isExist = cookBookmarks.find((item) => item.id == recipe.id);
    if (!isExist) {
      const newCookBookmarks = [...cookBookmarks, recipe];
      setCookBookmarks(newCookBookmarks);
    } else {
      alert();
    }
  };

  return (
    <div className="flex gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[60%] items-center">
        {recipes.map((recipe, idx) => (
          <Recipe
            key={idx}
            recipe={recipe}
            handleAddToCookBookmarks={handleAddToCookBookmarks}
          ></Recipe>
        ))}
      </div>
      <div className="w-[40%]">
        <CookBookmarks cookBookmarks={cookBookmarks}></CookBookmarks>
      </div>
    </div>
  );
};

export default Recipes;
