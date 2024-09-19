import { createBrowserRouter } from 'react-router-dom';

import { CountriesLayout } from '../layouts/CountriesLayout';
import { lazy, Suspense } from 'react';
import { Loader } from '@/components/shared/loader';

const CountryPage = lazy(() => import('@/pages/CountryPage'));
const AboutUsPage = lazy(() => import('@/pages/AboutUsPage'));
const CountriesPage = lazy(() => import('@/pages/CountriesPage'));
const HelpPage = lazy(() => import('@/pages/HelpPage'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <CountriesLayout />,
		children: [
			{
				path: '/',
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<CountriesPage />
					</Suspense>
				),
			},
			{
				path: '/help',
				element: (
					<Suspense fallback={<Loader />}>
						<HelpPage />
					</Suspense>
				),
			},
			{
				path: '/country/:code',
				element: (
					<Suspense fallback={<Loader />}>
						<CountryPage />
					</Suspense>
				),
			},
			{
				path: '/about-us',
				element: (
					<Suspense fallback={<Loader />}>
						<AboutUsPage />
					</Suspense>
				),
			},
		],
	},
]);
