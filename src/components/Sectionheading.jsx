const Sectionheading = ({ children, className = "" }) => {
  const base = "text-[#333333] font-ngh font-normal text-[24px] leading-[100%]";
  return (
    <div className=" flex gap-2 md:flex-row"
    >
      <p
        className={className ? className : `${base} `}
      >
        {children}
      </p>
    </div>
  );
};


export default Sectionheading;
