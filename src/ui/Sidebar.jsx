import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import { useLogout } from "../hooks/auth/useLogout";
import { useUser } from "../hooks/auth/useUser";
import Spinner from "./Spinner";

function Sidebar() {
  const { logout, isPending } = useLogout();
  const { user } = useUser();
  return (
    <div className="flex h-screen flex-col gap-10 bg-[var(--color3)] text-[var(--color-text)] shadow-2xl">
      {isPending && (
        <div className="absolute inset-0 z-50 flex items-center backdrop-blur-xs">
          <Spinner />
        </div>
      )}
      <Logo />
      <Navlinks />
      <div className="mt-auto flex flex-row justify-center bg-[var(--color10)]">
        <div className="flex flex-row">
          <span className="mt-2 text-3xl">
            {user?.user_metadata?.fullName
              ? user?.user_metadata?.fullName
              : "Username"}
          </span>
          <img
            src={user.user_metadata.avatar || "userlogo.png"}
            className="mt-2 h-10 w-10 rounded-3xl border-2 border-[var(--color1)]"
          />
        </div>
        <HiArrowRightEndOnRectangle
          className="h-14 w-10 text-[var(--color1)]"
          onClick={logout}
        />
      </div>
    </div>
  );
}

export default Sidebar;
