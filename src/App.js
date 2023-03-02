import {createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom"
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Children } from "react";
import "./App.scss"

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

const ErrorBoundary = () => {
  return (
    <div>
      Oops, my server must be down :(
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Products/",
        element: <Products />
      },
      {
        path: "/Products/:id",
        element: <Products />
      },
      {
        path: "/Product/:id",
        element: <Product />
      }
    ]
  },

])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
