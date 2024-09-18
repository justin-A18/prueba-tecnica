import { Country, CountryFullInfo } from "./country.response";
import { Continent } from "./continent.response";

export interface CountriesResponse {
	countries: Country[];
}

export interface CountryFullResponse {
	country: CountryFullInfo;
}

export interface ContinentsResponse {
	continents: Continent[];
}