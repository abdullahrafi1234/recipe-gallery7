import PropTypes from "prop-types";
import Ingredients from "../Ingredient/Ingredients";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({ recipe, handleAddToCookBookmarks  }) => {
  // console.log(recipe);
  const {
    recipe_name,
    recipe_img,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="p-2 md:p-6 rounded-2xl md:min-h-[800px] flex flex-col gap-6 border-2">
        <figure>
          <img
            src={recipe_img}
            alt="recipe-img"
            className="w-full h-[200px] rounded-2xl"
          />
        </figure>
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-semibold text-[#282828] mb-4">{recipe_name}</h2>
          <p className="text-base font-normal text-[#878787] mb-4">{short_description}</p>
          <hr />
          <div className="mt-6 mb-4">
            <h3 className="text-lg font-medium text-[#282828]">Ingredients: {ingredients.length} </h3>
            <div>
            {
                ingredients.map((item, idx) => <Ingredients key={idx} item={item}></Ingredients> )
            }
            </div>
          </div>
            <hr />
            <div className="flex gap-2 md:gap-4 my-6">
                <div className="flex items-center gap-1 md:text-base text-[#282828CC] font-normal"><span><IoMdTime /></span> <span>{preparing_time}</span> <span>minutes</span></div>
                <div className="flex items-center gap-1 md:text-base text-[#282828CC] font-normal" > <span><AiOutlineFire /></span> <span>{calories}</span>  <span>calories</span></div>
            </div>
          <div className="flex-1 flex items-end">
            <button onClick={() =>  handleAddToCookBookmarks(recipe)} className="btn rounded-[50px] bg-[#0BE58A] text-[#150B2B] text-lg font-medium">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleAddToCookBookmarks: PropTypes.func
};

export default Recipe;
