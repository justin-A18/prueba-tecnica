import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Search } from "lucide-react";
import { useState } from "react";

import { FiltersModal } from "./FiltersModal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { countryStore } from "@/store/country.store";

export const SearchCountry = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { setSearchTerm } = countryStore();

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const { register, handleSubmit,reset } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setSearchTerm(data.search);
    reset();
  };

  return (
    <div className="relative w-full">
      <form className="md:max-w-lg relative" onSubmit={handleSubmit(onSubmit)}>
        <Input
          onFocus={handleOpenModal}
          placeholder="Buscar..."
          className="border-2"
          {...register("search")}
          onBlur={handleOpenModal}
        />

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-0 right-0 bg-blue-300 
				hover:bg-blue-200 text-white hover:text-slate-100"
        >
          <Search className="size-5" />
        </Button>
      </form>

      <FiltersModal isOpenModal={isOpenModal} />
    </div>
  );
};
