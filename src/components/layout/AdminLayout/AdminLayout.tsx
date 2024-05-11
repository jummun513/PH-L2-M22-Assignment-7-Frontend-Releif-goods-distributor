import { Outlet } from "react-router-dom";
import { useMediaQuery } from "../../../hooks/use-media-query";
import { Button } from "@material-tailwind/react";
import SidebarLarge from "../../ui/SidebarLarge/SidebarLarge";
import SidebarSmall from "../../ui/SidebarSmall/SidebarSmall";

const AdminLayout = () => {
  const isDesktop = useMediaQuery("(min-width: 1320px)");
  return (
    <div className="relative w-full max-w-[1320px] mx-auto px-0 sm:px-0 lg:px-0 flex 2xl:grid grid-cols-8">
      {isDesktop ? (
        <SidebarLarge></SidebarLarge>
      ) : (
        <SidebarSmall></SidebarSmall>
      )}
      <div className="overflow-hidden w-full px-2 md:px-8 2xl:col-span-6 2xl:px-5">
        <div className="text-[16px] md:text-[28px] font-bold py-2 sm:py-4 border-b-2 flex justify-between items-center">
          <p>
            <span>Welcome, </span>
            <span className="text-primary">Mr. Xyz</span>
          </p>
          <Button size="sm" className="text-xs sm:text-sm">
            Sign Out
          </Button>
        </div>
        <div className="py-6 sm:py-8 md:py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
