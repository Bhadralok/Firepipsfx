import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPageLayout from "./Layouts/LandingPageLayout";
import Page404 from "./Pages/Page404";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Plans from "./Pages/Plans";
import Support from "./Pages/Support";
import FaqPage from "./Pages/FaqPage";
import LotsizeCalculator from "./Pages/LotsizeCalculator";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";
import Testing from "./Pages/Testing";
import Location from "./Pages/Location";
import LocationLogic from "./Components/LocationLogic";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="plans" element={<Plans />} />
          <Route path="support" element={<Support />} />
          <Route path="faqs" element={<FaqPage />} />
          <Route path="lotsize-calculator" element={<LotsizeCalculator />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="our-locations/:id" element={<LocationLogic />} />
          <Route path="testing" element={<Testing />} />
          <Route path="our-locations" element={<Location />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}
