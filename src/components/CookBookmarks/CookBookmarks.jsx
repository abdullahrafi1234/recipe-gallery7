import PropTypes from "prop-types";
const CookBookmarks = ({cookBookmarks}) => {
  return (
    <div>
      {/* want to cook part */}
      <div>
        <div className="w-[60%] mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">Want to cook: {cookBookmarks.length}</h1>
          <hr />
        </div>
        <div className="min-h-6">
        <table className="mx-auto">
          <thead>
            <tr >
                <th className="pr-4">  </th>
              <th className="pr-4">Name</th>
              <th className="pr-4">Time</th>
              <th className="pr-4">Calories</th>
              <th className="pr-4"></th>
            </tr>
          </thead>
          <tbody>
                {
                    cookBookmarks.map((cookBookmark, idx) => )
                }
          </tbody>
        </table>
        </div>
      </div>
      {/* Currently Cooking part */}
      <div>
        <div className="w-[60%] mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">Currently cooking: 02</h1>
          <hr />
        </div>
      </div>
    </div>
  );
};

CookBookmarks.propTypes = {
    cookBookmarks: PropTypes.array
}


export default CookBookmarks;
