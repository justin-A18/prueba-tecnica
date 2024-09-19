import { createBrowserRouter } from "react-router-dom";

import { AboutUsPage, CountriesPage, HelpPage } from "../pages";
import { CountriesLayout } from "../layouts/CountriesLayout";
import { CountryPage } from "@/pages/CountryPage";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <CountriesLayout />,
		children: [
			{
				path: '/',
				index: true,
				element: <CountriesPage />,
			},
			{
				path: '/help',
				element: <HelpPage />,
			},
			{
				path: '/country/:code',
				element: <CountryPage />,
			},
			{
				path: '/about-us',
				element: <AboutUsPage />,
			},
		],
	},
]);
