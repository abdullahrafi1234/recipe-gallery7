import PropTypes from "prop-types";
import CookBookmark from "../CookBookmark/CookBookmark";
import CurrentlyCookingBookmark from "../CurrentlyCookingBookmark/CurrentlyCookingBookmark";
const CookBookmarks = ({
  cookBookmarks,
  handlePreparingButton,
  currentlyCookBookmarks,
}) => {
  return (
    <div>
      {/* want to cook part */}
      <div>
        <div className="w-[60%] mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">
            Want to cook: {cookBookmarks.length}
          </h1>
          <hr />
        </div>
        <div className="mt-6">
          <div className="overflow-x-auto md:overflow-visible">
          <table className="mx-auto table">
            <thead>
              <tr>
              <th className=" pb-4"> </th>
                <th className=" pb-4">Name</th>
                <th className=" pb-4">Time</th>
                <th className="pb-4">Calories</th>
                <th className=" pb-4"> </th>
              </tr>
            </thead>
            <tbody className="bg-[#28282808] p-5 overflow-x-auto">
              {cookBookmarks.map((cookBookmark, idx) => (
                <CookBookmark
                  key={idx}
                  cookBookmark={cookBookmark}
                  index={idx + 1}
                  handlePreparingButton={handlePreparingButton}
                ></CookBookmark>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
      {/* Currently Cooking part */}
      <div>
        <h1 className="text-2xl mt-8 font-semibold mb-4 text-center">
          Currently cooking: {currentlyCookBookmarks.length}
        </h1>
        <div className="w-[60%] mx-auto ">
          <hr />
        </div>
        <div className="mt-6">
          
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                <th className=" pb-4"> </th>
                <th className=" pb-4">Name</th>
                <th className=" pb-4">Time</th>
                <th className="pb-4">Calories</th>
                </tr>
              </thead>
              <tbody>
              {currentlyCookBookmarks.map((item, index) => <CurrentlyCookingBookmark key={index} index={index+1} item = {item}> </CurrentlyCookingBookmark>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

CookBookmarks.propTypes = {
  cookBookmarks: PropTypes.array,
  handlePreparingButton: PropTypes.func,
  currentlyCookBookmarks: PropTypes.func,
};

export default CookBookmarks;
