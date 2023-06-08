import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [didUseEffect, setDidUseEffect] = useState(false);
  function handleResize() {
    if (window.innerWidth < 768) setIsMobile(true);
    else setIsMobile(false);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    setDidUseEffect(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isLoading: !didUseEffect,
    isMobile,
  };
}

export default useIsMobile;
