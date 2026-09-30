"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function HomeScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #EA580C 0%, #F97316 50%, #FB923C 100%)",
        transformOrigin: "0%",
        zIndex: 99999,
        pointerEvents: "none",
        boxShadow: "0 0 12px rgba(234, 88, 12, 0.6)",
      }}
    />
  );
}
