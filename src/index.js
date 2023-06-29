import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './responsive.css';
import './style.css'
import './vendor.css'
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from 'react-toastify'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import store from './redux/store';
import { Provider } from 'react-redux';

import App from './App';
import PurchasePlot from './pages/PurchasePlot';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import EditPlot from './pages/EditPlot';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/purchase",
    element: <PurchasePlot />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/edit/:id',
    element: <EditPlot />
  },
  {
    path: "*",
    element: <NoMatch />,
  }

]);


function NoMatch() {
  return (
    <div id='error-page'>
      <Navbar />
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '50vh',}}>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

