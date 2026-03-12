// DATA //
import logo from "../../assets/logo-b.svg";

// COMPONENTS //
import DrawerMenu from "../common/DrawerMenu";

// REACT HOOKS & COMPONENTS //
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// UI //

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-16 w-screen">
      <div className="h-full flex p-4 justify-between items-center">
        <section
          className="text-app-content flex items-center gap-2.5 text-[18px] font-semibold hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} className="h-6 z-1000" />
          <span>Julien Bouchez</span>
        </section>
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
