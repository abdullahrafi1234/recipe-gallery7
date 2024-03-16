import BannerImg from "../../assets/images/banner.jpeg";

const Banner = () => {
  return (
    <div>
      <div className="mt-10 bg-gradient-to-br from-[rgba(21,11,43,0.90)] to-[rgba(21,11,43,0.60)] w-full  relative rounded-3xl">
        <img src={BannerImg} alt="" className="w-full h-full object-container absolute mix-blend-overlay rounded-3xl" />
      <div className="text-center space-y-6 px-2 pt-8 md:pt-32">
        <h1 className="font-bold text-3xl md:text-5xl text-[#FFFFFF]">
          Discover an exceptional cooking
          <br />
          class tailored for you!
        </h1>
        <p className="text-lg font-normal text-[#FFFFFF]">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding <br /> problems to become an
          exceptionally well world-class Programmer.
        </p>
      </div>
      <div className="pt-10 px-2  pb-8 md:pb-32 flex gap-3 flex-col md:flex-row justify-center">
        <button className="btn btn-accent rounded-[50px] bg-[#0BE58A] text-[#150B2B] text-xl">Explore Now</button>
        <button className="btn btn-outline rounded-[50px] bg-transparent text-xl text-[#FFFFFF]">Our Feedback</button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
