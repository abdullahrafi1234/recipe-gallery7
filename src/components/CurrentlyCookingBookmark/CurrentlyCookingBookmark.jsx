import PropTypes from "prop-types";
const CurrentlyCookingBookmark = ({item, index}) => {
    const { recipe_name, preparing_time, calories } = item;
    return (
        <tr key={item.recipe_id} className="bg-base-200">
                    <th className="pt-2 pb-4 pl-4 text-base font-semibold">
                      {index}
                    </th>
                    <td className="pt-2 pb-4 pr-4 text-[#282828b3] text-base">
                      {recipe_name}
                    </td>
                    <td className="pt-2 pb-4 text-[#282828b3] text-base">
                      {preparing_time} <br /> minutes
                    </td>
                    <td className="pt-2 pb-4 text-[#282828b3] text-base">
                      {calories} <br /> calories
                    </td>
                  </tr>
    );
};

CurrentlyCookingBookmark.propTypes = {
    item: PropTypes.array,
    index: PropTypes.any
}

export default CurrentlyCookingBookmark;