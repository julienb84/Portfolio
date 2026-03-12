import Drawer from "../ui/drawer/drawerComponents/Drawer";
import DrawerClose from "../ui/drawer/drawerComponents/DrawerClose";
import DrawerContent from "../ui/drawer/drawerLayout/DrawerContent";
import DrawerDescription from "../ui/drawer/drawerContent/DrawerDescription";
import DrawerFooter from "../ui/drawer/drawerLayout/DrawerFooter";
import DrawerHeader from "../ui/drawer/drawerLayout/DrawerHeader";
import DrawerTitle from "../ui/drawer/drawerContent/DrawerTitle";
import DrawerTrigger from "../ui/drawer/drawerComponents/DrawerTrigger";
import Button from "../ui/Button";

import cv from "../../assets/CV_dev_02-2026_SVG.svg";
import cvToDownload from "../../assets/Julienbouchez_CV_dev_02-2026_000.pdf";

import { BiAlignMiddle } from "react-icons/bi";

interface ResumeViewProps {
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
}

const ResumeView: React.FC<ResumeViewProps> = ({
  direction,
  triggerVariant,
  triggerSize,
  triggerClassName,
}) => {
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
          <BiAlignMiddle />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center">
            <img src={cv} className="w-2xs xs:w-90 lg:w-115" />
          </div>
          <DrawerFooter className="pb-10 xs:pb-5">
            <Button
              variant="default"
              size="lg"
              className="w-2xs xs:w-90 border-app-content"
              onClick={handleClick}
            >
              Download
            </Button>
            <DrawerClose className="w-2xs xs:w-90">Close</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ResumeView;
