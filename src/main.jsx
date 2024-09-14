import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// import * as React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Outlet,
// } from "react-router-dom";
// import NavBar from './components/NavBar/NavBar'
// import Header from './components/header/Header'
// import AboutMe from './components/aboutMe/AboutMe'
// import Services from './components/services_sec/Services'
// import Projetcs from './components/projects_dev/Projetcs'
// import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'
// import WebDesign from "./components/Pages/WebDesign";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Welcome to My Portfolio</h1>
//         <nav>
//           <Link to="/">Home</Link> |{" "}
//           <Link to="about">AboutMe</Link> |{" "}
//           <Link to="services">Services</Link> |{" "}
//           <Link to="projects">Projects</Link>
//         </nav>
//         <Outlet />
//       </div>
//     ),
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "about", element: <AboutMe /> },
//       { path: "services", element: <Services /> },
//       { path: "projects", element: <Projetcs />, 
//         children: [
//           { path: "devops", element: <DevOps /> },
//           { path: "machine-learning", element: <MachineLearning /> },
//           { path: "data-analysis", element: <DataAnalysis /> },
//           { path: "cloud", element: <Cloud /> },
//           { path: "web-design", element: <WebDesign /> },
//         ],
//       },
//     ],
//   },
// ]);


// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
