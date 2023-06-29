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

import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/purchase",
  //   element: <PurchasePlot />,
  // },
  // {
  //   path: "/about-us",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />
  // },
  // {
  //   path: "/login",
  //   element: <Login />
  // },
  // {
  //   path: '/edit/:id',
  //   element: <EditPlot />
  // },
  {
    path: "*",
    element: <NoMatch />,
  }

]);


function NoMatch() {
  return (
    <div id='error-page'>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
);

