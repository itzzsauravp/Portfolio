import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const SharedLayout = () => {
  return (
    <div className="relative">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
