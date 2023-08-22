"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <span onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Image
          className="cursor-pointer"
          src={theme === "light" ? "/dark.svg" : "/light.svg"}
          alt="Theme Toggle"
          width={30}
          height={30}
          priority
        />
      </span>
    </>
  );
};

export default ToggleMode;
