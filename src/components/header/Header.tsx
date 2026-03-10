// DATA //
import logo from "../../assets/logo-b.svg";

// COMPONENTS //
import MenuDrawer from "../common/MenuDrawer";

// UI //
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <div className="h-16 w-screen">
      <div className="h-full flex p-5 justify-between items-center">
        <section className="text-app-content flex items-center gap-2.5 text-[18px] font-semibold">
          <img src={logo} className="h-6" />
          <span>Julien Bouchez</span>
        </section>
        <MenuDrawer
          direction="right"
          triggerVariant="default"
          triggerSize="icon"
        />
      </div>
    </div>
  );
};
export default Header;
