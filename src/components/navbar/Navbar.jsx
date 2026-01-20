import { useState } from "react";
import { Link } from "react-router-dom";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-full max-w-[1200px] -translate-x-1/2 px-4 md:px-6">
      <div className="flex h-[72px] items-center justify-between rounded-full border border-white/40 bg-white/80 px-4 pl-6 shadow-sm backdrop-blur-xl transition-all">
        {/* LEFT: LOGO */}
        <div className="flex-shrink-0">
          <NavLogo />
        </div>

        {/* CENTER: MENU */}
        <div className="hidden flex-1 justify-center md:flex">
          <NavMenu />
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            to="/login"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full px-5 py-2.5 text-sm font-bold text-[#FA6018] hover:bg-orange-50 transition-colors"
          >
            Register
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="ml-auto p-2 text-gray-600 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="mt-2 rounded-3xl border border-gray-100 bg-white p-4 shadow-xl md:hidden">
          <NavMenu mobile onClick={() => setOpen(false)} />
          <div className="mt-4 flex flex-col gap-2 border-t pt-4">
            <Link
              to="/login"
              className="w-full rounded-lg py-2 text-center text-sm font-semibold hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="w-full rounded-lg py-2 text-center text-sm font-bold text-[#FA6018] hover:bg-orange-50"
              onClick={() => setOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
