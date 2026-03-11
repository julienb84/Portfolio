// COMPONENTS //
import Drawer from "../ui/drawer/drawerComponents/Drawer";
import DrawerClose from "../ui/drawer/drawerComponents/DrawerClose";
import DrawerContent from "../ui/drawer/drawerLayout/DrawerContent";
import DrawerDescription from "../ui/drawer/drawerContent/DrawerDescription";
import DrawerHeader from "../ui/drawer/drawerLayout/DrawerHeader";
import DrawerTitle from "../ui/drawer/drawerContent/DrawerTitle";
import DrawerTrigger from "../ui/drawer/drawerComponents/DrawerTrigger";

// REACT HOOKS & COMPONENTS //
import { Link } from "react-router-dom";

// UI //
import { MdClose } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import Button from "../ui/Button";

interface MenuDrawerProps {
  direction?: "top" | "left" | "right";
  triggerVariant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | "link";
  triggerSize?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg";
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({
  direction,
  triggerVariant,
  triggerSize,
}) => {
  return (
    <>
      <Drawer direction={direction}>
        <DrawerTrigger
          variant={triggerVariant}
          size={triggerSize}
          className="hover:bg-hovercolor"
        >
          <LuMenu className="text-2xl" />
        </DrawerTrigger>
        <DrawerContent className="data-[vaul-drawer-direction=right]:border-transparent">
          <DrawerHeader className="items-end pr-3">
            <DrawerClose variant="default" size="icon" className="inline-flex">
              <MdClose className="text-3xl" />
            </DrawerClose>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <section className="text-app-content flex flex-col pt-20 pl-3 gap-10">
            <Button
              variant="default"
              size="lg"
              className="h-10 bg-transparent text-3xl italic justify-start hover:bg-transparent hover:font-semibold transition-all duration-300"
            >
              Projets
            </Button>
            <a
              href="https://github.com/julienb84"
              target="_blank"
              className="text-3xl italic font-medium px-3 hover:cursor-default hover:font-semibold transition-all duration-300"
            >
              Profile Github
            </a>
            <a
              href="https://www.linkedin.com/in/julien-bouchez-developer/"
              target="_blank"
              className="text-3xl italic font-medium px-3 hover:cursor-default hover:font-semibold transition-all duration-300"
            >
              Profile LinkedIn
            </a>
          </section>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
