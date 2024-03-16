import PropTypes from "prop-types";
import CookBookmark from "../CookBookmark/CookBookmark";
const CookBookmarks = ({cookBookmarks}) => {
  return (
    <div className=" border-2 rounded-2xl">
      {/* want to cook part */}
      <div>
        <div className="w-[60%] mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">Want to cook: {cookBookmarks.length}</h1>
          <hr />
        </div>
        <div className="mt-6">
        <table className="mx-auto">
          <thead className="">
            <tr>
              <th className="pr-8 pb-4">  </th>
              <th className="pr-8 pb-4">Name</th>
              <th className="pr-8 pb-4">Time</th>
              <th className="pr-8 pb-4">Calories</th>
              <th className="pr-8 pb-4"> </th>
            </tr>
          </thead>
          <tbody className="bg-[#28282808] p-5">
                {
                    cookBookmarks.map((cookBookmark, idx) => <CookBookmark key={idx} cookBookmark={cookBookmark} idx={idx+1}></CookBookmark> )
                }
          </tbody>
        </table>
        </div>
      </div>
      {/* Currently Cooking part */}
      <div>
        <div className="w-[60%] mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">Want to cook: {cookBookmarks.length}</h1>
          <hr />
        </div>
        <div className="mt-6">
        <table className="mx-auto">
          <thead className="">
            <tr>
              <th className="pr-8 pb-4">  </th>
              <th className="pr-8 pb-4">Name</th>
              <th className="pr-8 pb-4">Time</th>
              <th className="pr-8 pb-4">Calories</th>
            </tr>
          </thead>
          <tbody className="bg-[#28282808] p-5">
                
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

CookBookmarks.propTypes = {
    cookBookmarks: PropTypes.array
}


export default CookBookmarks;
