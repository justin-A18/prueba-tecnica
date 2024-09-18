import { useCountry } from "@/hooks/country/useCountry";
import { useParams } from "react-router-dom";

export const CountryPage = () => {
  const params = useParams();

  const { data, loading, error } = useCountry(params.code as string);

  console.log({ data, loading, error });

  return <div>CountryPage</div>;
};
