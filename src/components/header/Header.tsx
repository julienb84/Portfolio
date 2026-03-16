// DATA //
import logo from "../../assets/logo-b.svg";

// COMPONENTS //
import DrawerMenu from "../common/DrawerMenu";

// FRAMEWORKS COMPONENTS & HOOKS //
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// UI //

interface HeaderProps {
  isHome: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-16 w-screen lg:wrapper1">
      <div className="h-full flex p-4 justify-between items-center sm:px-8 md:px-10 lg:px-6">
        <section
          className="text-app-content flex items-center gap-2.5 text-[18px] font-semibold hover:cursor-pointer sm:text-[24px]"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} className="h-6 z-1000 sm:h-8" />
          <span>Julien Bouchez</span>
        </section>
        <DrawerMenu
          direction="right"
          triggerVariant="default"
          triggerSize="icon"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isHome={isHome}
        />
      </div>
    </div>
  );
};
export default Header;
