import * as React from "react";

interface EscapeAndStopScrollingProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  closeOnEscape?: boolean;
  onClose?: () => void;
}

export const useEscapeAndStopScrollingEffect = ({
  isOpen,
  setIsOpen,
  closeOnEscape = true,
  onClose,
}: EscapeAndStopScrollingProps) => {
  React.useEffect(() => {
    function handleKeyupEvent(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose ? onClose() : setIsOpen?.(false);
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (closeOnEscape) {
        document.addEventListener("keyup", handleKeyupEvent);
      }
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keyup", handleKeyupEvent);
    };
  }, [isOpen, setIsOpen, closeOnEscape, onClose]);
};
