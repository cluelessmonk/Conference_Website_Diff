import banner from "../images/banner.png";
function Header() {
  return (
    <div className="p-2 w-full h-50">
      <img
        src={banner}
        alt="Your Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Header;
