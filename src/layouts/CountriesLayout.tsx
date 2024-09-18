import { Outlet } from "react-router-dom";
import { Sidebar, MobileMenu } from "../components/shared/menu";

export const CountriesLayout = () => {
  return (
    <main className="w-full min-h-full grid md:grid-cols-[250px_1fr] pb-12 md:p-0">
      <Sidebar />
      <Outlet />
      <MobileMenu />
    </main>
  );
};
