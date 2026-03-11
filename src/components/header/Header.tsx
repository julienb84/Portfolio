// DATA //
import logo from "../../assets/logo-b.svg";

// COMPONENTS //
import MenuDrawer from "../common/MenuDrawer";

// REACT HOOKS & COMPONENTS //
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// UI //
import { LuMenu } from "react-icons/lu";

const Header = () => {
  const navigate = useNavigate();
  const [isClosed, setIsClosed] = useState(false);
  return (
    <div className="h-16 w-screen">
      <div className="h-full flex p-5 justify-between items-center">
        <section
          className="text-app-content flex items-center gap-2.5 text-[18px] font-semibold"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} className="h-6" />
          <span>Julien Bouchez</span>
        </section>
        <MenuDrawer
          direction="right"
          triggerVariant="default"
          triggerSize="icon"
          isClosed={isClosed}
          setIsClosed={setIsClosed}
        />
      </div>
    </div>
  );
};
export default Header;
