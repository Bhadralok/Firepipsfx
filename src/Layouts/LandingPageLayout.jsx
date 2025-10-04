import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function LandingPageLayout() {
  return (
    <div className="">
      <Header />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
