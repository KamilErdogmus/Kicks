import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 2xl:p-10 bg-white-fa lg:rounded-[24px] rounded-xl flex justify-between items-center max-w-[1320px] mx-auto md:h-[52px] h-24,">
      <nav className="max-md:hidden flex gap-10 whitespace-nowrap items-center">
        <Link to={"/"}>New Drops 🔥</Link>
        <Link
          className="flex gap-[2px] items-center justify-between"
          to={"/"}
        >
          Men
          <img src="/caret_down.svg" alt="" />
        </Link>
        <Link
          className="flex gap-[2px] items-center justify-between"
          to={"/"}
        >
          Women
          <img src="/caret_down.svg" alt="" />
        </Link>
      </nav>
      <button className="hidden max-md:flex">
        <img src="/menu.png" alt="" />
      </button>

      <Link to={"/"}>
        <img
          src="/logo.svg"
          alt="kicks-logo"
          className="lg:w-32 lg:h-8 w-20 h-[20px]"
        />
      </Link>

      <div className="flex items-center justify-end gap-10 max-md:gap-[9px]">
        <button className="ms-[137px] max-md:hidden">
          <img src="/Search.svg" alt="" />
        </button>
        <button>
          <img src="/User.svg" alt="" />
        </button>
        <button className="w-8 h-8 bg-yellow rounded-full font-semibold font-open grid place-content-center">
          <span>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
