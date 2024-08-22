import { RoomProvider } from './context/RoomContext';
import ReactDOM from 'react-dom/client'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

import App from './App'
import './style/index.css';



ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <RoomProvider>
      <React.StrictMode>
        <App />
          <ToastContainer />
      </React.StrictMode>
    </RoomProvider>,
  )