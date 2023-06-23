import React from "react";
import cx from "classnames";

function NavItems(props) {
  const {
    icon,
    text = "",
    alt = "icon",
    border = false,
    borderSm = false,
    className,
    borderRadius,
  } = props;
  return (
    <div
      className={cx("flex items-center", {
        "w-32 h-10 border border-[#787486] border-solid rounded-md py-3 px-4":
          border,
        [`${className}`]: className,
      })}
    >
      <span>
        <img
          src={icon}
          alt={alt}
          className={cx({ "rounded-full w-6 h-6": borderRadius })}
        />
      </span>
      {text}
    </div>
  );
}

export default NavItems;
