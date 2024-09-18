import { NavLinks } from "./NavLinks";

export const Sidebar = () => {
  return (
    <aside className="p-4 hidden md:flex flex-col border-r-2 top-0 sticky h-screen md:gap-8">
      <header className="flex items-center gap-3">
        <img src="/logo.svg" alt="logo" className="size-8" />
        <span className="text-lg font-medium">NationBrowse</span>
      </header>

      <nav role="navigation">
        <NavLinks />
      </nav>
    </aside>
  );
};
