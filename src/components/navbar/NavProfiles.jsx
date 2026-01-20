import { ChevronDown } from "lucide-react";

const NavProfiles = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer rounded-full px-3 py-1.5 hover:bg-gray-100">
      
      {/* Avatar */}
      <img
        src="https://i.pravatar.cc/40?img=3"
        alt="profile"
        className="h-9 w-9 rounded-full object-cover"
      />

      {/* Name & Email */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-gray-800">
          Name
        </span>
        <span className="text-xs text-gray-500">
          email
        </span>
      </div>

      {/* Dropdown Icon */}
      <ChevronDown size={16} className="text-gray-600" />
    </div>
  );
};

export default NavProfiles;
