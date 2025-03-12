import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import EventsPage from "./pages/events";
import AccountabilityPage from "./pages/accbility";
import DonationPage from "./pages/donation";
import Dashboard from "./pages/dashboard";

import "./App.css"; // Main styling

// Define your routes and include basename for subpath handling
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "events",
          element: <EventsPage />,
        },
        {
          path: "donations",
          element: <DonationPage />,
        },
        {
          path: "accountability",
          element: <AccountabilityPage />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ],
  {
    basename: "/CMI-DEMO", // Add this line for base URL handling
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;