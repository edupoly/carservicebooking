import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Dashboard';
import AddCarType from './Components/AddCarType';
import AddServiesType from './Components/AddServiceType';
import AddService from './Components/AddService';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:'/dashboard/addCarType',
            element:<AddCarType></AddCarType>
          },
          {
            path:'/dashboard/addServiceType',
            element:<AddServiesType></AddServiesType>
          },
          {
            path:'/dashboard/addService',
            element:<AddService></AddService>
          }
        ]
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();