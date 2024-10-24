const Header = ({ display }) => {
  return (
    <div className="flex h-[80px] w-full items-center justify-between bg-[#435B66] px-[73px] py-[9px] font-aclonica text-english-lavender">
      {display !== "start" && <div className="text-[55px]">QUIZ APP</div>}
    </div>
  );
};

export default Header;
