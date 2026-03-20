// COMPONENTS //
import Drawer from "../ui/drawer/drawerComponents/Drawer";
import DrawerClose from "../ui/drawer/drawerComponents/DrawerClose";
import DrawerContent from "../ui/drawer/drawerLayout/DrawerContent";
import DrawerDescription from "../ui/drawer/drawerContent/DrawerDescription";
import DrawerFooter from "../ui/drawer/drawerLayout/DrawerFooter";
import DrawerHeader from "../ui/drawer/drawerLayout/DrawerHeader";
import DrawerTitle from "../ui/drawer/drawerContent/DrawerTitle";
import DrawerTrigger from "../ui/drawer/drawerComponents/DrawerTrigger";
import Button from "../ui/Button";

// DATA //
import cvToDownload from "../../assets/Julienbouchez_CV_dev_02-2026_000.pdf";

// UI //
import { ImProfile } from "react-icons/im";
import { IoArrowDownOutline } from "react-icons/io5";

type ResumeViewProps = {
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
  triggerClassName?: string;
};

const ResumeView = ({
  direction,
  triggerVariant,
  triggerSize,
  triggerClassName,
}: ResumeViewProps) => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = cvToDownload;
    link.download = "cv_Bouchez-dev.pdf"; // nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Drawer direction={direction}>
        <DrawerTrigger
          variant={triggerVariant}
          size={triggerSize}
          className={triggerClassName}
        >
          Voir mon CV
          <ImProfile />
        </DrawerTrigger>
        <DrawerContent className="data-[vaul-drawer-direction=bottom]:border-transparent">
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dldc2n70y/image/upload/v1774005073/CV_dev_02-2026_SVG_p53tby.svg"
              alt="CV"
              className="w-2xs text-app-content xs:w-90 lg:w-115"
            />
          </div>
          <DrawerFooter className="pb-10 xs:pb-5">
            <Button
              variant="default"
              size="lg"
              className="w-2xs xs:w-90 border-app-content"
              onClick={handleClick}
            >
              Télécharger
              <IoArrowDownOutline className="animate-bounce" />
            </Button>
            <DrawerClose className="w-2xs xs:w-90">Close</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ResumeView;
