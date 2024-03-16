import PropTypes from "prop-types";
import Ingredients from "../Ingredient/Ingredients";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({ recipe }) => {
  // console.log(recipe);
  const {
    recipe_id,
    recipe_name,
    recipe_img,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="p-6 rounded-2xl min-h-[1300px] flex flex-col gap-6 border-2">
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
            <div className="flex gap-4 my-6">
                <p className="flex items-center gap-1 text-base text-[#282828CC] font-normal"><IoMdTime /> {preparing_time} minutes</p>
                <p className="flex items-center gap-1 text-base text-[#282828CC] font-normal" > <AiOutlineFire /> {calories}  calories</p>
            </div>
          <div className="flex-1 flex items-end">
            <button className="btn rounded-[50px] bg-[#0BE58A] text-[#150B2B] text-lg font-medium">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
};

export default Recipe;
