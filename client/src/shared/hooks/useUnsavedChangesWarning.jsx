import { useEffect, useRef } from "react";
import { useBlocker } from "react-router-dom";

export function useUnsavedChangesWarning(isDirty) {
  // A ref, so a successful save can disable the warning before navigating
  const bypass = useRef(false);

  // Refresh, tab close, external links
  useEffect(() => {
    if (!isDirty) return;

    const handler = (e) => {
      if (bypass.current) return;
      e.preventDefault();
      e.returnValue = ""; // required by some browsers
    };

    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [isDirty]);

  // In-app navigation (needs a data router: createBrowserRouter)
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      isDirty &&
      !bypass.current &&
      currentLocation.pathname !== nextLocation.pathname,
  );

  return {
    blocker,
    allowNavigation: () => {
      bypass.current = true;
    },
  };
}
