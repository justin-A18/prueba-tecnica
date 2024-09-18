import { createBrowserRouter } from "react-router-dom";

import { AboutUsPage, CountriesPage, ExplorePage } from "../pages";
import { CountriesLayout } from "../layouts/CountriesLayout";
import { CountryPage } from "@/pages/CountryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CountriesLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <CountriesPage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/country/:code",
        element: <CountryPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);
