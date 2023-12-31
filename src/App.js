import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans, { loader as vanLoader } from "./pages/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/VanDetail";
import "./App.css";
import "./server";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, { loginLoader, action as loginAction } from "./pages/Login";
import { requireAuth } from "./utils";
// localStorage.removeItem('loggedin')

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} loader={loginLoader} action={loginAction}/>
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vanLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return await requireAuth();
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />

        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
