import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Vans, { loader } from './pages/Vans';
import VanDetail from './pages/VanDetail';
import './App.css';
import './server';
import Layout from './components/Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
// import HostVanLayout from './components/HostVanLayout';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import Login from './pages/Login';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} errorElement={<Error />} loader={loader} />
          <Route path='vans/:id' element={<VanDetail />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />

            <Route path='vans/:id' element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />}></Route>
              <Route path='pricing' element={<HostVanPricing />}></Route>
              <Route path='photos' element={<HostVanPhotos />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
