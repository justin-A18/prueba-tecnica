import { Option, SlidersHorizontal, Trash } from "lucide-react";

import { TypographyH2, TypographyP } from "../shared/typography";
import { Button } from "../ui/button";

import { useContinents } from "@/hooks/continent";
import { countryStore } from "@/store/country.store";

export const FiltersModal = ({ isOpenModal }: { isOpenModal: boolean }) => {
  const { data, loading } = useContinents();
  const { setSelectedFilter, selectedFilter, clearFilters } = countryStore();

  return (
    <div
      className={`absolute z-20 top-14 bg-slate-100 md:max-w-lg
			w-full p-4 rounded-lg space-y-3 transition-all duration-500 ${
        isOpenModal
          ? "-translate-y-0 visible opacity-100"
          : "-translate-y-10 invisible opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <TypographyH2 className="text-lg flex items-center gap-2">
          <SlidersHorizontal className="size-5" />
          Filtrar por continente:
        </TypographyH2>

        <Button className="p-2 flex items-center gap-2" onClick={clearFilters}>
          <span className="hidden sm:inline">Limpiar filtros</span>{" "}
          <Trash className="size-4" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-between">
        {loading ? (
          <TypographyP>Loading...</TypographyP>
        ) : (
          data?.continents.map(({ code, name }) => (
            <Button
              key={code}
              variant="custom-button"
              onClick={() => setSelectedFilter(name)}
              className={`${
                selectedFilter.includes(name)
                  ? "bg-blue-200 hover:bg-blue-300"
                  : ""
              }`}
            >
              <Option className="size-4" /> {name}
            </Button>
          ))
        )}
      </div>
    </div>
  );
};
