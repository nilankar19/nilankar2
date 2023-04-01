import { useState, useEffect } from "react";

export default function Darkmode({children}) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(prefersDarkMode.matches);

    const handleChange = () => {
      setIsDarkMode(prefersDarkMode.matches);
    };

    prefersDarkMode.addEventListener("change", handleChange);

    return () => {
      prefersDarkMode.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      {children}
    </div>
  );
}
