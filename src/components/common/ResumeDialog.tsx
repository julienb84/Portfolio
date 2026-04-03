// COMPONENTS //
import Dialog from "../ui/dialog/dialogComponents/Dialog";
import DialogTrigger from "../ui/dialog/dialogComponents/DialogTrigger";
import DialogContent from "../ui/dialog/dialogLayout/DialogContent";
import DialogHeader from "../ui/dialog/dialogLayout/DialogHeader";
import DialogDescription from "../ui/dialog/dialogContent/DialogDescription";
import DialogTitle from "../ui/dialog/dialogContent/DialogTitle";
import DialogFooter from "../ui/dialog/dialogLayout/DialogFooter";
import Button from "../ui/Button";

// DATA //
import cvToDownload from "../../assets/Julienbouchez_CV_dev_03-2026_00.pdf";

// UI //
import { ImProfile } from "react-icons/im";
import { IoArrowDownOutline } from "react-icons/io5";

type ResumeDialogProps = {
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

const ResumeDialog = ({
  triggerVariant,
  triggerSize,
  triggerClassName,
}: ResumeDialogProps) => {
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
      <Dialog>
        <DialogTrigger
          variant={triggerVariant}
          size={triggerSize}
          className={triggerClassName}
        >
          Voir mon CV
          <ImProfile />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dldc2n70y/image/upload/v1775211241/CV_dev_03-2026_SVG_z5meeg.svg"
              alt="CV"
              className="w-200 text-app-content"
            />
          </div>
          <DialogFooter className="md:justify-center">
            <Button
              variant="default"
              size="lg"
              className="w-2xs xs:w-90 border-app-content"
              onClick={handleClick}
            >
              Télécharger
              <IoArrowDownOutline className="animate-bounce" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResumeDialog;
