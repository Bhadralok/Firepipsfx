import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function LandingPageLayout() {
  return (
    <div className="">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
