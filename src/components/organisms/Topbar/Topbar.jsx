import React from "react";
import NavItems from "../../molecules/NavItem/NavItem";
import Downgray from "../../../assets/chevron-down-gray.svg";
import USALogo from "../../../assets/usa-icon.png";
import Bell from "../../../assets/bell-icon.svg";
import Profile from "../../../assets/profile.svg";
import Down from "../../../assets/chevron-down.svg";

function Topbar() {
  return (
    <div className="p-5 flex flex-row items-center h-16 bg-white sticky top-0 z-10 justify-between">
      <p className="font-bold text-2xl md:pr-8 lg:pr-56">Dashboard</p>
      <input
        type="text"
        placeholder="Search here..."
        className="w-96 py-2 px-9 rounded-md bg-[#f9fafc] bg-inp-image bg-no-repeat bg-[13px_center]"
      />
      <div className="flex flex-row items-center">
        <div className="md:hidden lg:block lg:pl-20">
          <NavItems
            icon={USALogo}
            borderRadius
            text={
              <p className="text-black flex flex-row gap-3 items-center text-xs font-bold">
                Eng (US)
                <span>
                  <img src={Downgray} alt="down" width="14px" height="14px" />
                </span>
              </p>
            }
            className="gap-2"
          />
        </div>
        <div className="md:pl-4 lg:pl-8">
          <div className="w-8 h-8 relative rounded-sm flex justify-center items-center bg-light-yellow">
            <NavItems icon={Bell} alt="bell-icon" />
            <div className="absolute w-1 h-1 rounded-full bg-red-500 top-[2px] right-[2px]" />
          </div>
        </div>
        <div className="md:pl-4 lg:pl-10 flex gap-3">
          <img src={Profile} alt="profile-img" className="" />
          <div className="flex gap-3">
            <div>
              <p className="font-light text-[15px]">Musfiq</p>
              <p className="font-light text-sm text-gray-400">Admin</p>
            </div>
            <img src={Down} alt="down" className="mt-1 self-start" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
