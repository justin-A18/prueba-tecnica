import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
	query GetCountry($code: ID!) {
		country(code: $code) {
			code
    	name
    	capital
    	continent {
    	  code
    	  name
    	}
    	emoji
    	phone
    	currency
    	languages{
    	  code
    	  name
    	}
    	awsRegion
		}
	}
`;