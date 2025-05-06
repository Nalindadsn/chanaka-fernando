"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../theme-toggle";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.main}>
        <div
          className={`${styles.header} flex items-center gap-2 text-xl ${
            isActive ? "text-white" : ""
          }`}
        >
          {" "}
          <div className="text-white bg-gray-800 px-4  py-1 rounded-full opacity-80 flex items-center">
            <span className=" flex justify-center pr-2">Home</span>{" "}
            <ThemeToggle />
          </div>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
