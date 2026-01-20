import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/icons/Kalbii-logo.svg";
import dropdown from "../../assets/icons/dropdown-icon.png";

const NavLogo = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center gap-2" ref={dropdownRef}>

      <img
        src={logo}
        alt="company logo"
        className="h-8 w-auto cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />





      {open && (
        <div
          className="
            absolute left-0 top-10
            w-40
            rounded-xl
            border border-gray-200
            bg-white
            shadow-lg
            p-2
            z-50
          "
        >
          <button
            className="
              w-full text-left
              rounded-lg px-3 py-2
              text-sm
              hover:bg-gray-100 text-black
            "
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            Kalbii 1
          </button>
        </div>
      )}
    </div>
  );
};

export default NavLogo;
