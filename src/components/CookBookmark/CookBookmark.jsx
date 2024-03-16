import PropTypes from "prop-types";
const CookBookmark = ({ cookBookmark, index, handlePreparingButton }) => {
  const { recipe_name, preparing_time, calories } = cookBookmark;
  return (
    <>
      <tr>
        <th className="pt-2 pb-4 pl-4  text-base font-semibold">{index}</th>
        <td className="pt-2 pb-4 pr-4 text-[#282828b3] text-base">{recipe_name}</td>
        <td className="pt-2 pb-4 text-[#282828b3] text-base">{preparing_time} <br /> minutes</td>
        <td className="pt-2 pb-4 text-[#282828b3] text-base">
          {calories} <br /> calories
        </td>
        
        <td className="pt-2 pr-1 pb-4">
          <button onClick={() => handlePreparingButton(cookBookmark)} className="btn  rounded-[50px] bg-[#0BE58A] text-[#150B2B] text-base font-medium">
            Prepare
          </button>
        </td>
      </tr>
    </>
  );
};

CookBookmark.propTypes = {
  cookBookmark: PropTypes.object,
  index: PropTypes.any,
  handlePreparingButton: PropTypes.func
};

export default CookBookmark;
