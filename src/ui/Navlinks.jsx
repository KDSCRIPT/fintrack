import { NavLink } from "react-router-dom";
import { HiListBullet, HiSparkles } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { HiCog6Tooth } from "react-icons/hi2";

function Navlinks() {
  return (
    <div className="flex w-80 flex-col text-[var(--color-text)]">
      <nav className="flex flex-col gap-5">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row font-extrabold underline"
              : "flex flex-row"
          }
        >
          <HiOutlineHome className="h-14 w-10 text-[var(--color9)]" />
          <span className="mt-1 text-3xl">Dashboard</span>
        </NavLink>

        <NavLink
          to="/Entries"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row font-extrabold underline"
              : "flex flex-row"
          }
        >
          <HiListBullet className="h-14 w-10 text-[var(--color9)]" />
          <span className="mt-2 text-3xl">Entries</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row font-extrabold underline"
              : "flex flex-row"
          }
        >
          <HiCog6Tooth className="h-14 w-10 text-[var(--color9)]" />
          <span className="mt-1 text-3xl">Settings</span>
        </NavLink>

        <NavLink
          to="/techstack"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row font-extrabold underline"
              : "flex flex-row"
          }
        >
          <HiSparkles className="h-14 w-10 text-[var(--color9)]" />
          <span className="mt-1 text-3xl">TechStack</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navlinks;
