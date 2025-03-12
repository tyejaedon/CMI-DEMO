import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import EventsPage from "./pages/events";
import AccountabilityPage from "./pages/accbility";
import DonationPage from "./pages/donation";
import Dashboard from "./pages/dashboard";

import "./App.css"; // Main styling

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/donations",
    element: <DonationPage />,
  },
  {
    path: "/accountability",
    element: <AccountabilityPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Navbar />
      <div className="content">
        {/* You no longer need <Routes> here */}
      </div>
      <Footer />
    </RouterProvider>
  );
}

export default App;
