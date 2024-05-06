import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";
import background from "./images/bg2.jpg";

function Layout() {
  return (
    <div className="flex flex-col p-2  ">
      <Header />
      {/* <div className=" grid grid-cols-12 p-2 gap-2">
        <div className="col-span-2 bg-green-300   gap-3  items-center ">
          
          <SidebarMenu />
        </div>
        <div className="col-span-10 bg-slate-400">
          <Outlet />
        </div>
      </div> */}
      <div className="grid grid-cols-12 mb-2   gap-2  border border-black">
        <div className=" col-span-4 sm:col-span-3  gap-4 p-2 border border-black">
          <center>
            <img
              className="mb-2 w-full border-black rounded-md"
              src="data:image/jpeg;base64,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"
            />
            <SidebarMenu />
          </center>
        </div>
        <div className="relative col-span-8 sm:col-span-9  border border-black h-full ">
          <div className=" absolute top-0 bg-cover w-full h-full z-[-1]">
            <img src={background} className="w-full h-full" />
          </div>
          <div className=" inset-0 backdrop-blur-lg bg-white/50 h-full ">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;