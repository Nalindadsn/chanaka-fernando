"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../theme-toggle";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation hook

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [loading, controls]);

  return loading ? (
    <div className="loading">
      <motion.div
        className="fixed  rounded-lg  top-8 right-8 w-[100px] h-[50px] flex justify-center items-center z-10"
        animate={controls}
      >
        <div className="p-4 rounded-md">
          <div className="flex justify-center">
            <>
              <motion.span
                className="w-4 h-4 my-12 mx-1 bg-green-500 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [1, 0], // Fades out
                  transition: { duration: 1, repeat: 2 },
                }}
              />
              <motion.span
                className="w-4 h-4 my-12 mx-1 bg-green-500 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [1, 0], // Fades out
                  transition: { duration: 1, repeat: 1.8, delay: 0.2 },
                }}
              />
              <motion.span
                className="w-4 h-4 my-12 mx-1 bg-green-500 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [1, 0], // Fades out
                  transition: { duration: 1, repeat: 1.6, delay: 0.4 },
                }}
              />
            </>
          </div>
        </div>
      </motion.div>
    </div>
  ) : (
    <>
      <div className={`${styles.main}`}>
        <div
          className={`${styles.header}  flex items-center gap-2 text-xl ${
            isActive ? "text-white" : ""
          }`}
        >
          {" "}
          <div className="flex">
            <span className=" flex justify-center pr-2"></span> <ThemeToggle />
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
