import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";

function Layout() {
  return (
    <div className="gap-4">
      <Header />
      <div className="p-2 grid grid-cols-12 gap-4">
        <div className="col-span-2 bg-slate-500 container mx-auto  flex items-center   ">
          <SidebarMenu />
        </div>
        <div className="col-span-10 bg-slate-400">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
