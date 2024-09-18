import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function TypographyP({ children, className }: Props) {
  return <p className={cn("leading-7", className)}>{children}</p>;
}
