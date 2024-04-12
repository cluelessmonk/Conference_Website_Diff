/* eslint-disable react/no-unknown-property */
import "./App.css";
import Header from "./components/Header";
// import Body from "./components/Body";
import Footer from "./components/Footer";
// import SidebarMenu from "./components/SidebarMenu";
function App() {
  return (
    <>
      <div className="gap-4">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
