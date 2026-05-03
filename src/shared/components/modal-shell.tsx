import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

type ModalShellProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};
export const ModalShell = ({ children, title, className }: ModalShellProps) => {
  return (
    <Dialog>
      <DialogContent
        className={cn(
          "max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6",
          className,
        )}
      >
        <DialogHeader>
          <DialogTitle className="sr-only">{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
