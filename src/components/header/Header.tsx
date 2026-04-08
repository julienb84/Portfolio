// DATA //
import logo from "../../assets/logo-b.svg";

// COMPONENTS //
import DrawerMenu from "../common/DrawerMenu";

// FRAMEWORKS COMPONENTS & HOOKS //
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-16 w-screen fixed bg-app-background z-50">
      <div className="h-full flex p-4 justify-between items-center sm:px-8 md:px-10 lg:px-2 lg:wrapper1">
        <Link to="/">
          <button className="text-app-content border-0 flex items-center gap-2.5 text-[18px] font-semibold hover:font-bold hover:tracking-wide hover:cursor-default transition-all duration-300 sm:text-[24px]">
            <img src={logo} className="h-6 sm:h-8" />
            <span>Julien Bouchez</span>
          </button>
        </Link>

        <DrawerMenu
          direction="right"
          triggerVariant="default"
          triggerSize="icon"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};
export default Header;
