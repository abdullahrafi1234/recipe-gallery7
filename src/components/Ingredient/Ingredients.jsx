import PropTypes from 'prop-types'
const Ingredients = ({item}) => {
    return (
        <div>
            <ul className="list-disc ml-7 text-lg font-normal text-[#878787]">
                <li>{item}</li>
            </ul>
        </div>
    );
};

Ingredients.propTypes = {
    item: PropTypes.any
}

export default Ingredients;