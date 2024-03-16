import Recipes from "../Recipes/Recipes";

const Main = () => {
    return (
        <div className="my-28">
            <div className="text-center space-y-6 mb-6 md:mb-12">
                <h1 className="text-4xl font-semibold text-[#150B2B]">Our Recipes</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget 
                <br />urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <Recipes></Recipes>
        </div>
    );
};

export default Main;