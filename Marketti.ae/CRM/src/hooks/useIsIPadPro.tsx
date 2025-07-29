"use client";

import { useEffect, useState } from "react";

export const useIsIPadPro = () => {
  const [isIPadPro, setIsIPadPro] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent || navigator.vendor;
      const isIOS = /iPad|iPhone|iPod/.test(ua);
      const isBigScreen = window.innerWidth >= 1024;

      setIsIPadPro(isIOS && isBigScreen);
    }
  }, []);

  return isIPadPro;
};
