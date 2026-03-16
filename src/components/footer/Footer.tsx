// COMPONENTS //
import { useTheme } from "../../context/ThemeContext";

// UI //
import Button from "../ui/Button";
import { ButtonGroup, ButtonGroupSeparator } from "../ui/ButtonGroup";
import { GrSystem } from "react-icons/gr";
import { IoIosMoon } from "react-icons/io";
import { HiSun } from "react-icons/hi2";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-32 w-screen bg-footer-background pt-2 px-4 flex justify-between xxs:justify-center xxs:gap-8 xs:gap-18 vs:gap-30 md:gap-40">
      <div className="flex flex-col gap-5">
        <section className="flex flex-col gap-1 text-[14px]">
          <p className="text-primary/60">Connect</p>
          <a
            href="https://github.com/julienb84"
            target="_blank"
            className="text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/julien-bouchez-developer/"
            target="_blank"
            className="text-primary"
          >
            LinkedIn
          </a>
        </section>
        <span className="text-primary text-[12px]">© Julien Bouchez 2026</span>
      </div>
      <div>
        <ButtonGroup orientation="horizontal">
          <Button
            variant={theme === "system" ? "outline2" : "default"}
            size="icon-xl"
            onClick={() => {
              setTheme("system");
            }}
            className={
              theme === "system" ? "hover:none" : "hover:bg-hovercolor"
            }
          >
            <GrSystem className="text-[20px]" />
          </Button>
          <ButtonGroupSeparator />
          <Button
            variant={theme === "dark" ? "outline2" : "default"}
            size="icon-xl"
            onClick={() => setTheme("dark")}
            className={theme === "dark" ? "hover:none" : "hover:bg-hovercolor"}
          >
            <IoIosMoon className="text-[20px]" />
          </Button>
          <ButtonGroupSeparator />
          <Button
            variant={theme === "light" ? "outline2" : "default"}
            size="icon-xl"
            onClick={() => setTheme("light")}
            className={theme === "light" ? "hover:none" : "hover:bg-hovercolor"}
          >
            <HiSun className="text-[20px]" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Footer;
