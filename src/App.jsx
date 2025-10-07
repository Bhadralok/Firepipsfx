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

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="plans" element={<Plans />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}
