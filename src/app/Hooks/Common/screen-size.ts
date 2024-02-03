"use client";
import { useEffect, useState } from "react";

const MobileScreen = () => {
  const [isMobile, setIsMobile] = useState(true);

  const updateScreenSize = () => {
    const windowSize = window.innerWidth;

    if (windowSize < 500) {
      setIsMobile(true);
    } else if (windowSize > 900) {
      setIsMobile(false);
    }
  };

  useEffect(() => {

    updateScreenSize();

    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return isMobile;
};

export default MobileScreen;
