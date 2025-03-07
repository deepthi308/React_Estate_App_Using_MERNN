import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-xs p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto gap-2">
        <Link to={"/"}>
          {" "}
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap p-2">
            <span className="text-slate-500">ManDeep</span>
            <span className="text-slate-700">Properties</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none border-none w-30 sm:w-64"
          />
          <FaSearch cursor={"pointer"} className="text-slate-500" />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="about">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to="sign-in">
            <li className="text-slate-700 hover:underline cursor-pointer">
              Signin
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
