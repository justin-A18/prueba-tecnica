import { gql } from "@apollo/client";

export const GET_FILTER_COUNTRIES = gql`
  query GetCountriesByName($name: String) {
    countries(filter: { name: { regex: $name } }) {
      code
      name
      capital
      emoji
      continent {
        code
        name
      }
    }
  }
`;

