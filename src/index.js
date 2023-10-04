import React from "react";
import ReactDOM from "react-dom/client";

// look at the extension below , all three works it treats all three as JS
import Header from "./Header.jsx";
import Body from "./Body.js";
import Footer from "./Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./About.jsx";
import Contact from "./Contact.js";
import { ErrorElement } from "./ErrorComponent.jsx";
import { RestaurantMenu } from "./RestaurantMenu.jsx";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* Outlet is used to show child elements */}
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router={appRouter} />);
