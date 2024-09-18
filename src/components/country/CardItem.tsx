import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { TypographyH4 } from "../shared/typography";
import { buttonVariants } from "../ui/button";

import { Country } from "@/interfaces/country.response";
import { useImage } from "@/hooks/images/useImage";
import { Link } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";

export const CardItem = ({ continent, code, emoji, name }: Country) => {
  const { image, isLoading } = useImage(name);

  return (
    <Card>
      <CardHeader className="p-0">
        {isLoading ? (
          <Skeleton className="w-full h-60 rounded-lg" />
        ) : (
          <img
            className="rounded-lg h-60 object-cover"
            src={image}
            alt={name}
          />
        )}
      </CardHeader>

      <CardContent className="px-3 py-4 space-y-4">
        <div className="flex justify-between">
          <div className="space-y-1">
            <TypographyH4>{name}</TypographyH4>
            <span>{continent.name}</span>
          </div>

          <span>
            {emoji} {code}
          </span>
        </div>

        <Link
          to={`/country/${code}`}
          className={buttonVariants({
            variant: "custom-button",
            className: "w-full flex gap-2",
          })}
        >
          Ver detalles <ChevronRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
};
