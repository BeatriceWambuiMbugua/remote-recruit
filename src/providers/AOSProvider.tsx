"use client";
import { useEffect } from "react";
import AOS from 'aos';


export const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return <>{children}</>;
};