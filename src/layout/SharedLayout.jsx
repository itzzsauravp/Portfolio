import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <div className="relative">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
