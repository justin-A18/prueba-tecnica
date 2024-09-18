import { capitalizeWord } from '@/helpers/capitalizeWord.helper';
import { Country } from '@/interfaces/country.response';
import { create } from 'zustand';

interface Store {
	searchTerm: string;
	setSearchTerm: (searchTerm: string) => void;
	selectedFilter: string[];
	filteredCountries: Country[];
	setSelectedFilter: (filter: string) => void;
	setFilteredCountries: (countries: Country[]) => void;
	clearFilters: () => void;
};

export const countryStore = create<Store>()((set) => ({
	selectedFilter: [],
	searchTerm: '',
	filteredCountries: [],
	setSelectedFilter: (filter: string) => set((state) => {
		const filterExists = state.selectedFilter.includes(filter);
		return {
			selectedFilter: filterExists
				? state.selectedFilter.filter(f => f !== filter)
				: [...state.selectedFilter, filter]
		};
	}),
	setFilteredCountries: (countries: Country[]) => set((state) => {
		const filters = state.selectedFilter;
		return {
			filteredCountries: filters.length > 0
				? countries.filter(country => filters.includes(country.continent.name))
				: countries
		};
	}),
	clearFilters: () => set({ selectedFilter: [], filteredCountries: [], searchTerm: '' }),
	setSearchTerm: (searchTerm: string) => set({ searchTerm: capitalizeWord(searchTerm) })
}));
