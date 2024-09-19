import { CountriesResponse } from "@/interfaces/api.response";
import { GET_ALL_COUNTRIES, GET_FILTER_COUNTRIES } from "@/services/country";
import { useQuery } from "@apollo/client";

export const useCountries = (term?: string) => {
	const query = term ? GET_FILTER_COUNTRIES : GET_ALL_COUNTRIES;
	const variables = term ? { name: term } : undefined;

	const countriesQuery = useQuery<CountriesResponse>(query, {
		variables,
		skip: !term && query === GET_FILTER_COUNTRIES, 
		fetchPolicy: 'cache-first',
	});

	return countriesQuery;
};
