import React from "react";
import NavItems from "../../molecules/NavItem/NavItem";
import Logo from "../../../assets/company-logo.svg";
import { Static } from "../../../utils/static";
import FooterLogo from "../../../assets/footer-logo.svg";

function Sidebar() {
  return (
    <div className="p-3">
      <div className="pb-6">
        <NavItems
          icon={Logo}
          text={<p className="text-lg font-black">Dabang</p>}
          alt="company-logo"
          className="gap-3"
        />
      </div>

      {Static.sideBarItems.map((navItem) => (
        <div
          className="py-2 my-2 pl-3 w-44 hover:bg-bg-violet hover:rounded-lg hover:cursor-pointer text-[#888da2] hover:text-white"
          key={navItem.id}
        >
          <NavItems
            icon={navItem.icon}
            text={<p className="text-sm font-black">{navItem.title}</p>}
            alt="company-logo"
            className="gap-5"
          />
        </div>
      ))}
      <div className="pt-16 pl-3">
        <div className="w-40 h-40 bg-bg-violet bg-sidebar-footer-image bg-center rounded-xl text-center px-4 py-1">
          <img src={FooterLogo} alt="logo" className="w-8 h-8 mt-2 mx-auto" />
          <p className="font-bold text-sm pb-2 pt-2 text-white">Dabang Pro</p>
          <p className="text-xs text-white pb-2">
            Get access to all features on tetumbas
          </p>
          <button className="rounded-lg bg-white py-1 px-6 text-xs">
            Get Pro
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
