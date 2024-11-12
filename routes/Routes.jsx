import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


import NotFound from "../pages/NotFound";
import JobDetails from "../components/JobDetails/JobDetails";

const fetchJobs = async () => {
  const response = await fetch('/jobs.json');
  if (!response.ok) throw new Error('Failed to load jobs');
  return response.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: fetchJobs,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
