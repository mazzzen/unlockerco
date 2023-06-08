import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MODE_MAP = {
  onStart: "routeChangeStart",
  onComplete: "routeChangeComplete",
} as const;

export default function useRouteChange(
  cb?: () => void,
  mode: keyof typeof MODE_MAP = "onStart"
) {
  const router = useRouter();
  const [state, setState] = useState<{
    url: string;
    isLoading: boolean;
  }>({ url: router?.pathname, isLoading: false });

  useEffect(() => {
    const handleStart = (url: string) => {
      if (mode === "onStart") cb?.();
      setState({ url, isLoading: true });
    };

    const handleStop = (url: string) => {
      if (mode === "onComplete") cb?.();
      setState({ url, isLoading: false });
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [cb, mode, router.events]);
  return state;
}
