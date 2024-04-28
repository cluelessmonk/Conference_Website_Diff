// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
function SidebarMenu() {
  // const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();
  const menuItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Committee", path: "/committee" },
    { id: 3, title: "Program Schedule", path: "/programme_schedule" },
    { id: 4, title: "Keynote Speakers", path: "/keynote_speakers" },
    { id: 5, title: "Tutorial Speakers", path: "/tutorial_speakers" },
    { id: 6, title: "Track Chairs", path: "/track_chairs" },
    { id: 7, title: "Special Session", path: "/special_session" },
    { id: 8, title: "Fee Structure", path: "/fee_structure" },
    { id: 9, title: "Submit Your Paper", path: "/submit_your_paper" },
    { id: 10, title: "Paper Submission Guidlines", path: "/conference_info" },
    { id: 11, title: "Contact Us", path: "/contact_us" },
    { id: 12, title: "Call for Papers", path: "/call_for_papers" },
  ];

  return (
    <div className="  flex flex-col  bg-gray-800 text-white   border border-black ">
      <div className=" font-bold p-1 bg-slate-600">Menu</div>

      {menuItems.map((items) => {
        const isActive = location.pathname === items.path;
        return (
          <div
            key={items.id}
            className={`  p-1 sm:p-2 cursor-pointer text-xs sm:text-base ${
              isActive ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            <Link to={items.path} className="hover:underline">
              <h1>{items.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SidebarMenu;
