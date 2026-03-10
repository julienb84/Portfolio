// COMPONENTS //
import Drawer from "../ui/drawer/drawerComponents/Drawer";
import DrawerClose from "../ui/drawer/drawerComponents/DrawerClose";
import DrawerContent from "../ui/drawer/drawerLayout/DrawerContent";
import DrawerDescription from "../ui/drawer/drawerContent/DrawerDescription";
import DrawerHeader from "../ui/drawer/drawerLayout/DrawerHeader";
import DrawerTrigger from "../ui/drawer/drawerComponents/DrawerTrigger";

// UI //
import { MdClose } from "react-icons/md";
import { LuMenu } from "react-icons/lu";

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
        <DrawerTrigger variant={triggerVariant} size={triggerSize}>
          <LuMenu className="text-2xl" />
        </DrawerTrigger>
        <DrawerContent className="data-[vaul-drawer-direction=right]:border-transparent">
          <DrawerHeader className="items-end pr-3">
            <DrawerClose variant="default" size="icon" className="inline-flex">
              <MdClose className="text-3xl" />
            </DrawerClose>
          </DrawerHeader>
          <DrawerDescription className="text-app-content flex flex-col">
            <span>LE GRAND</span>
            <span>LE GRAND</span>
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
