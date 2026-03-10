// DATA //
import logo from "../../assets/logo-b.svg";

const Header = () => {
  return (
    <div className="h-14 w-screen">
      <div className="h-full flex p-5">
        <section className="text-app-content flex items-center gap-2.5 text-[18px] font-semibold">
          <img src={logo} className="h-6" />
          <span>Julien Bouchez</span>
        </section>
      </div>
    </div>
  );
};
export default Header;
