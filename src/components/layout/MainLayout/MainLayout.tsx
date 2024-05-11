import { Outlet } from "react-router-dom";
import { TopNavbar } from "../../ui/TopNavbar/TopNavbar";

const MainLayout = () => {
  return (
    <>
      <TopNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
