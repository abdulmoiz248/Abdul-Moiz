'use client'
import { motion,  useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface FuturisticBackgroundProps {
  isHovering: boolean;
  mouseX: MotionValue<number>; // Use the correct type for MotionValue
  mouseY: MotionValue<number>;
}

export const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({
  isHovering,
  mouseX,
  mouseY,
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    // Set window dimensions on mount
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const gradientX = useTransform(mouseX, [0, windowWidth || 1], [0, 100]);
  const gradientY = useTransform(mouseY, [0, windowHeight || 1], [0, 100]);

  return (
    <>
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundPosition: `${gradientX}% ${gradientY}%`,
          transition: "background-position 0.3s ease-out",
        }}
      />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="2"
              fill="white"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.g>
      </svg>
    </>
  );
};
