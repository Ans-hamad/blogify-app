import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-[#2e3944]",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg hover:bg-gray-800 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
