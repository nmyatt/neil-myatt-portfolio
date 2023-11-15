import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    const t = setTimeout(() => {
      // scroll is applied to body, not html - see CSS
      document.documentElement.getElementsByTagName('body')[0].scrollTo({
        // document.documentElement.scrollTo({
        top: 0,
        left: 0,
        //behavior: "instant", // Optional if you want to skip the scrolling animation
      });
    },300); // delay corresponds to fade-in animation duration
  }, [pathname]);

  return null;
}