import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import Restaurant from './pages/Restaurant';
import NearbyAttraction from './pages/NearbyAttraction';
import RoomView from './pages/RoomView';
import Contact from './pages/Contact';
import MainLayout from './pages/MainLayout';
import Dashboard from './pages/Dashboard';
import ListNearbyAttraction from './pages/features/nearby-attraction/ListNearbyAttraction';
import AddNearbyAttraction from './pages/features/nearby-attraction/AddNearbyAttraction';
import UpdateNearbyAttraction from './pages/features/nearby-attraction/UpdateNearbyAttraction';
import ListRestaurant from './pages/features/restaurant/ListRestaurant';
import AddRestaurant from './pages/features/restaurant/AddRestaurant';
import UpdateRestaurant from './pages/features/restaurant/UpdateRestaurant';
import { AttractionProvider } from './context/AttractionContext.jsx';
import { RestaurantProvider } from './context/RestaurantContext.jsx';

const ProtectedRoute = ({ children }) => {
    const role = localStorage.getItem('role');
    if (role !== 'Admin') {
        return <Navigate to="/" replace />;
    }
    return children;
};

const App = () => (
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
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            >
                {/* Wrapping with context providers outside of Route components */}
                <Route
                    path="list-attractions"
                    element={
                        <AttractionProvider>
                            <ListNearbyAttraction />
                        </AttractionProvider>
                    }
                />
                <Route
                    path="attractions/add"
                    element={
                        <AttractionProvider>
                            <AddNearbyAttraction />
                        </AttractionProvider>
                    }
                />
                <Route
                    path="attractions/update/:id"
                    element={
                        <AttractionProvider>
                            <UpdateNearbyAttraction />
                        </AttractionProvider>
                    }
                />
                <Route
                    path="list-restaurants"
                    element={
                        <RestaurantProvider>
                            <ListRestaurant />
                        </RestaurantProvider>
                    }
                />
                <Route
                    path="restaurant/add"
                    element={
                        <RestaurantProvider>
                            <AddRestaurant />
                        </RestaurantProvider>
                    }
                />
                <Route
                    path="restaurant/update/:id"
                    element={
                        <RestaurantProvider>
                            <UpdateRestaurant />
                        </RestaurantProvider>
                    }
                />
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
);

export default App;
