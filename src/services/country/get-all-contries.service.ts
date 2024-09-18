import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
  query {
    countries {
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
