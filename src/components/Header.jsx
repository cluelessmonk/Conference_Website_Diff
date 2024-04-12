import banner from "../images/banner.png";
function Header() {
  return (
    <div className=" w-full h-50 border border-black mb-2">
      <img
        src={banner}
        alt="Your Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Header;
