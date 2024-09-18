import { NavLink } from "react-router-dom";
import { sidebarLinks } from "@/const/sidebarLinks";
import { Tooltip } from "./Tooltip";

export const MobileMenu = () => {
  return (
    <div
      className="md:hidden fixed left-1/2 -translate-x-1/2 bottom-0 
      h-14 max-w-lg w-full"
    >
      <ul
        className="flex justify-around px-4 items-center py-2 w-full h-full 
				font-bold bg-slate-200 rounded-lg"
      >
        {sidebarLinks.map(({ icon, name, path }) => (
          <li key={path}>
            <NavLink
              className={({ isActive }) => `cursor-pointer flex items-center 
							justify-center ${
                isActive ? "bg-blue-200 text-white" : "text-black"
              }hover:bg-blue-400 transition-colors duration-500 relative 
							z-10 group size-10 rounded-lg`}
              to={path}
            >
              <Tooltip className="bg-black before:border-t-black">
                {name}
              </Tooltip>
              {icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
