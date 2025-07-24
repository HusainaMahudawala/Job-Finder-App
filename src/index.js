import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobDetail from './pages/JobDetail';
import SavedJobs from './pages/SavedJobs';
const Layout=() => {
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

let allRoutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/job/:id',
          element:<JobDetail/>
        },
        {
          path:"/saved",
          element:<SavedJobs/>,
        },
        
      ],
    },
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={allRoutes}/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
