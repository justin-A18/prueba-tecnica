import { ContinentsResponse } from "@/interfaces/api.response";
import { GET_ALL_CONTINENTS } from "@/services/continent";
import { useQuery } from "@apollo/client";

export const useContinents = () => {
	const continentsQuery = useQuery<ContinentsResponse>(GET_ALL_CONTINENTS,{
		fetchPolicy: 'cache-first',
	});
	return continentsQuery;
};
