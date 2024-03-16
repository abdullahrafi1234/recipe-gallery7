import Recipes from "../Recipes/Recipes";

const Main = () => {
    return (
        <div className="my-28">
            <div className="text-center space-y-6 mb-6 md:mb-12">
                <h1 className="text-4xl font-semibold text-[#150B2B]">Our Recipes</h1>
                <p className="text-base font-normal text-[#150B2B99]">Explore culinary delights with Our Recipes: a curated collection of flavorful dishes to inspire 
                <br /> your kitchen adventures and satisfy your cravings.</p>
            </div>
            <Recipes></Recipes>
        </div>
    );
};

export default Main;