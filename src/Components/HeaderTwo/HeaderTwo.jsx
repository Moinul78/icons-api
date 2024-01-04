import { Link } from "react-router-dom";

const HeaderTwo = () => {

  
  return (
    <div>
      <nav className="bg-slate-50 lg:bg-white lg:shadow p-4">
        <p className="text-xl font-semibold mb-4">Style</p>
        <div className="flex lg:flex-col gap-1 font-medium">
          <Link
            to="/solid"
            className="font-normal text-sm hover:bg-blue-100 px-2 py-2 duration-300"
          >
            Solid
          </Link>
          <Link
            to="/regular"
            className="font-normal text-sm hover:bg-blue-100 px-2 py-2 duration-300"
          >
            regular
          </Link>
          <Link
            to="/thin"
            className="font-normal text-sm hover:bg-blue-100 px-2 py-2 duration-300"
          >
            Thin
          </Link>
          <Link
            to="/light"
            className="font-normal text-sm hover:bg-blue-100 px-2 py-2 duration-300"
          >
            Light
          </Link>
        </div>

        <p className="text-xl font-semibold mt-6 mb-2">Feature</p>
        <div className="flex lg:flex-col gap-3 font-medium">
          <Link
            to="/alert"
            className="font-normal text-sm hover:bg-blue-100 px-2 py-2 duration-300"
          >
            Alert
          </Link>
          <Link
            to="/alphabet"
            className="font-normal text-sm hover:bg-blue-100 px-2 py-2 duration-300"
          >
            Alphabet
          </Link>
          <Link
            to="/communication"
            className="font-normal text-sm hover:bg-blue-100 px-2 py-2 duration-300"
          >
            Communication
          </Link>
          <Link
            to="/business"
            className="font-normal text-sm hover:bg-blue-100 px-2 py-2 duration-300"
          >
            Business
          </Link>
          <Link
            to="/map"
            className="font-normal text-sm hover:bg-blue-100 px-2 py-2 duration-300"
          >
            Map
          </Link>
          <Link
            to="/social"
            className="font-normal text-sm hover:bg-blue-100 px-2 py-2 duration-300"
          >
            Social
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTwo;