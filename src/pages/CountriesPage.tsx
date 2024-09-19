/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, Suspense, useEffect } from "react";

import {
  TypographyH1,
  TypographyH3,
  TypographyP,
} from "../components/shared/typography";
import { SearchCountry } from "@/components/country/SearchCountry";
import { Loader } from "@/components/shared/loader";

import { useCountries } from "@/hooks/country/useCountries";
import { countryStore } from "@/store/country.store";

const CountriesItems = lazy(() => import("@/components/country/CountriesItems"));

const CountriesPage = () => {
  const {
    setFilteredCountries,
    filteredCountries,
    selectedFilter,
    searchTerm,
  } = countryStore();
  const { data, loading } = useCountries(searchTerm);

  useEffect(() => {
    setFilteredCountries(data?.countries || []);
  }, [data?.countries, selectedFilter]);

  return (
		<section className='p-5 space-y-8'>
			<header className='space-y-2'>
				<TypographyH1>¡Bienvenido!</TypographyH1>
				<TypographyP>
					En esta página encontrarás información de los paises.
				</TypographyP>
			</header>

			<SearchCountry />

			{searchTerm !== '' && (
				<TypographyH3>{`Resultados para : ${searchTerm}`}</TypographyH3>
			)}

			{loading ? (
				<Loader />
			) : (
				<Suspense fallback={<Loader />}>
					{filteredCountries.length !== 0 ? (
						<CountriesItems countries={filteredCountries} />
					) : (
						<div className='text-center p-4 text-lg'>
							<TypographyP>No se encontraron resultados ...</TypographyP>
						</div>
					)}
				</Suspense>
			)}
		</section>
	);
};

export default CountriesPage;