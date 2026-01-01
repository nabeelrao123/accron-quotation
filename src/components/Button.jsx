const Button = ({ children, variant = "primary", icon = null, iconPosition = "left", }) => {
  const base =
    " font-ngh px-4 py-2  text-sm font-normal rounded-md transition focus:outline-none focus:ring-2";

  const variants = {
    primary: "bg-[#0154AA] text-white font-semibold  hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-[#0154AA] text-white font-semibold  hover:bg-gray-700 focus:ring-gray-300",
    // outline:"font-ngh  px-4 py-2 border text-[#737A91] font-normal  border-[#737A91]  rounded hover:bg-blue-500 hover:text-white transition",
    outline:"font-ngh  px-2  border text-[#737A91] font-normal  border-[#737A91]  rounded hover:bg-blue-500 hover:text-white transition",
    danger: "bg-[#0154AA] text-white hover:bg-red-700 focus:ring-red-300",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {icon && iconPosition === "left" && icon}
      {children}
      {/* {icon && iconPosition === "right" && icon} */}

      {/* {children} */}
    </button>
  );
};

export default Button;
