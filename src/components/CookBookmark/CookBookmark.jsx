import PropTypes from "prop-types";
const CookBookmark = ({ cookBookmark, idx }) => {
  const { recipe_name, preparing_time, calories } = cookBookmark;
  // console.log(cookBookmark);
  console.log(idx);
  return (
    <>
      <tr>
        <td className="pt-2 pb-4 pl-4">{idx}</td>
        <td className="pt-2 pb-4 pr-4">{recipe_name}</td>
        <td className="pt-2 pb-4">{preparing_time} <br /> minutes</td>
        <td className="pt-2 pb-4">
          {calories} <br /> calories
        </td>
        <td className="pt-2 pr-4 pb-4">
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
