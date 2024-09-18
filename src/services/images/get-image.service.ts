import axios from "axios";

export const getImagesService = async (query: string) => {
	try {
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: {
				query: query,
				per_page: 1
			},
			headers: {
				Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`
			}
		});

		return response.data.results[0];	
	} catch (error) {
		console.error(error);
	}
};