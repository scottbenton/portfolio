import { motion, Variants } from "framer-motion";
import React from "react";

const animationVariants: Variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};

export interface PageTransitionProps {
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = (props) => {
  const { children, className } = props;

  return (
    <motion.main
      variants={animationVariants}
      initial={"hidden"}
      animate={"enter"}
      exit={"exit"}
      transition={{ type: "just" }}
      className={className}
    >
      {children}
    </motion.main>
  );
};
