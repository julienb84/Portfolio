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
    <div className="min-h-32 w-screen bg-footer-background pt-2 px-4 flex vs:px-10 sm:justify-center">
      <div className="w-full flex flex-col gap-3 sm:w-140">
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <section className="flex flex-col gap-1 text-[14px]">
              <p className="text-primary/60">Contact</p>
              <a
                href="mailto:julienbouchez@icloud.com"
                target="_blank"
                className="text-primary"
              >
                Email
              </a>
              <a
                href="tel:+33672687641"
                target="_blank"
                className="text-primary"
              >
                Mobile
              </a>
            </section>
          </div>
          <div>
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
                  theme === "system"
                    ? "hover:none"
                    : "hover:bg-hovercolor hover:cursor-default"
                }
              >
                <GrSystem className="text-[20px]" />
              </Button>
              <ButtonGroupSeparator />
              <Button
                variant={theme === "dark" ? "outline2" : "default"}
                size="icon-xl"
                onClick={() => setTheme("dark")}
                className={
                  theme === "dark"
                    ? "hover:none"
                    : "hover:bg-hovercolor hover:cursor-default"
                }
              >
                <IoIosMoon className="text-[20px]" />
              </Button>
              <ButtonGroupSeparator />
              <Button
                variant={theme === "light" ? "outline2" : "default"}
                size="icon-xl"
                onClick={() => setTheme("light")}
                className={
                  theme === "light"
                    ? "hover:none"
                    : "hover:bg-hovercolor hover:cursor-default"
                }
              >
                <HiSun className="text-[20px]" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <span className="text-primary text-[12px]">© Julien Bouchez 2026</span>
      </div>
    </div>
  );
};

export default Footer;
