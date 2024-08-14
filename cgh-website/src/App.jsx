import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import {Footer, Header, PageNotFound, Rooms} from './components';
import { Home, RoomDetails } from './pages';
import Restaurant from "./pages/Restaurant.jsx";
import NearbyAttraction from "./pages/NearbyAttraction.jsx";
import RoomView from "./pages/RoomView.jsx";


const App = () => {

  // const paths = [
  //   { path: '/', element: <Home /> },
  //   { path: '/room/:id', element: <RoomDetails /> },
  //   { path: '*', element: <PageNotFound /> },
  // ]

  // const router = createBrowserRouter(paths);
  // <RouterProvider router={router} /> 

  return (

    <main className=''>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/room/:id'} element={<RoomDetails />} />
          <Route path={'/restaurant'} element={<Restaurant />} />
          <Route path={'/attractions'} element={<NearbyAttraction />} />
          <Route path={'/rooms'} element={<RoomView />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </main>
  )
}

export default App