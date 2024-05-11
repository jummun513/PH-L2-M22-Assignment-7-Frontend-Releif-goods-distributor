import { Outlet } from "react-router-dom";
import { TopNavbar } from "../../ui/TopNavbar/TopNavbar";
import Footer from "../../ui/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <TopNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
