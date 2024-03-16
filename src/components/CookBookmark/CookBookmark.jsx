import PropTypes from "prop-types";
const CookBookmark = ({ cookBookmark, idx }) => {
  const { recipe_name, preparing_time, calories } = cookBookmark;
  // console.log(cookBookmark);
  console.log(idx);
  return (
    <>
      <tr>
        <td>{idx}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
        <td>
          <button className="btn py-0 rounded-[50px] bg-[#0BE58A] text-[#150B2B] text-base font-medium">
            Prepare
          </button>
        </td>
      </tr>
    </>
  );
};

CookBookmark.propTypes = {
  cookBookmark: PropTypes.object,
  idx: PropTypes.any,
};

export default CookBookmark;
