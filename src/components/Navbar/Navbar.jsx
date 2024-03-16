import { IoIosSearch } from "react-icons/io";
import navbarIcon from "../../assets/icon/Frame (1).png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base font-normal text-[#150B2BB3]"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-base md:text-2xl lg:text-3xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  text-base font-normal text-[#150B2BB3]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-4 items-center">
            <div className="hidden md:flex items-center border px-2 py-1 bg-[#150B2B0D] rounded-xl">
              <p>
                <IoIosSearch />
              </p>
              <input
                type="text"
                placeholder="Search"
                className="input input-xs w-full max-w-xs outline-none bg-transparent"
              />
            </div>
            <div className="bg-[#0BE58A] hidden  text-[#150B2B] rounded-full md:flex justify-center items-center p-1 h-auto">
            <img src={navbarIcon} alt="navbar_icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  md:hidden justify-center">
      <div className="flex mx-auto items-center w-[60%] bg-[#150B2B0D] border px-2 py-1 rounded-xl">
        <p>
          <IoIosSearch />
        </p>
        <input
          type="text"
          placeholder="Search"
          className="input input-xs w-full max-w-xs outline-none bg-transparent"
        />
      </div>
      <div className="bg-[#0BE58A] text-[#150B2B] rounded-full flex justify-center items-center p-1 h-auto">
            <img src={navbarIcon} alt="navbar_icon" />
            </div>
      </div>
    </div>
  );
};

export default Navbar;
