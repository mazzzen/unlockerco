import { useEffect, useRef } from "react";

export const useClickOutside = (handler: () => void) => {
  const ref = useRef<any>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (!ref?.current || ref?.current?.contains(event.target)) {
      return;
    }
    if (handler) handler();
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref };
};
