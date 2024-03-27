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
    { id: 10, title: "Conference Info", path: "/conference_info" },
    { id: 11, title: "Contact Us", path: "/contact_us" },
    { id: 12, title: "Special Session", path: "/special_session" },
    { id: 13, title: "Special Session", path: "/special_session" },
    { id: 14, title: "Special Session", path: "/special_session" },
  ];

  // const handleClick = (id) => {
  //   setSelectedItem(id);
  // };

  return (
    <div className="  flex flex-col bg-gray-800 text-white h-full w-full">
      <div className="text-2xl font-bold p-4 bg-slate-600">Menu</div>
      {/* <div>
        {menuItems.map((item) => (
          
        ))}
      </div> */}
      <div>
        {menuItems.map((items) => {
          const isActive = location.pathname === items.path;
          return (
            <div
              key={items.id}
              className={`p-4 cursor-pointer ${
                isActive ? "bg-gray-600" : "hover:bg-gray-700"
              }`}
            >
              <Link to={items.path} className="hover:underline">
                {items.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SidebarMenu;
