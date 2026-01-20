import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBAr from "../Shared/NavBar/NavBAr";

const Main = () => {
  return (
    <div>
      <NavBAr></NavBAr>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
