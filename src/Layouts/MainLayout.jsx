import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar Thakbe */}
      <div className="h-16">
        <NavBar></NavBar>
      </div>

      {/* Dynamic sections thakbe */}
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
        <Outlet></Outlet>
      </div>

      {/* Footer thakbe */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
