import { useEffect } from "react";

const SUFFIX = "Hardik Shukla";

export function usePageTitle(pageTitle?: string, fullOverride?: boolean) {
  useEffect(() => {
    if (fullOverride && pageTitle) {
      document.title = pageTitle;
    } else {
      document.title = pageTitle ? `${pageTitle} · ${SUFFIX}` : SUFFIX;
    }
  }, [pageTitle, fullOverride]);
}
