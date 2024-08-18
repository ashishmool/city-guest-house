import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header, PageNotFound } from './components';
import { Home, RoomDetails } from './pages';
import Restaurant from "./pages/Restaurant.jsx";
import NearbyAttraction from "./pages/NearbyAttraction.jsx";
import RoomView from "./pages/RoomView.jsx";
import Contact from "./pages/Contact.jsx";
// import NewPassword from "./pages/Authentication/NewPassword.jsx";
// import Login from "./pages/Authentication/Login.jsx";
import MyBookings from "./pages/MyBookings.jsx";
// import Dashboard from "./pages/features/Dashboard.jsx";

const App = () => {
  return (
      <main>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="login" element={<Login />} />*/}
            {/*<Route path="new-password" element={<NewPassword />} />*/}
            <Route path="/room/:id" element={<RoomDetails />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/attractions" element={<NearbyAttraction />} />
            <Route path="/rooms" element={<RoomView />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            {/*/!* Conditionally render Admin routes *!/*/}
            {/*{role === "Admin" && (*/}
            {/*    <Route path="/dashboard/*" element={<Dashboard />} />*/}
            {/*)}*/}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
  );
};

export default App;
