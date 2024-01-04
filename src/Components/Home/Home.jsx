import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import HeaderTwo from "../HeaderTwo/HeaderTwo";
import Inputs from "../inputs/Inputs";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col">
      <Inputs></Inputs>
      <Header></Header>
      <div className="flex flex-col lg:flex-row lg:gap-4">
        <div className="w-2/12 mt-12 text-left">
          <HeaderTwo></HeaderTwo>
        </div>
        <div className="w-full bg-white mt-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;