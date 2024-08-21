import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import Restaurant from "./pages/Restaurant.jsx";
import NearbyAttraction from "./pages/NearbyAttraction.jsx";
import RoomView from "./pages/RoomView.jsx";
import Contact from "./pages/Contact.jsx";
import MainLayout from './pages/MainLayout.jsx';
import Dashboard from "./pages/Dashboard.jsx";
import ListNearbyAttraction from './pages/features/nearby-attraction/ListNearbyAttraction.jsx';
import AddNearbyAttraction from './pages/features/nearby-attraction/AddNearbyAttraction.jsx';
import UpdateNearbyAttraction from './pages/features/nearby-attraction/UpdateNearbyAttraction.jsx';

const App = () => {
  const role = localStorage.getItem('role');

  return (
      <main>
        <BrowserRouter>
          <Routes>
            {/* Non-Admin Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/room/:id" element={<RoomDetails />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/attractions" element={<NearbyAttraction />} />
              <Route path="/rooms" element={<RoomView />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Admin Routes */}
            {role === "Admin" && (
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="list-attractions" element={<ListNearbyAttraction />} />
                  <Route path="attractions/add" element={<AddNearbyAttraction />} />
                  <Route path="attractions/update/:id" element={<UpdateNearbyAttraction />} />
                </Route>
            )}

            {/* 404 Page */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
  );
};

export default App;
