import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 680px)");
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 681px) and (max-width: 1023px)");
}
